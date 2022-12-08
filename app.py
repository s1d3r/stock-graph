from flask import Flask, request, render_template
from plotly.graph_objects import Figure, Scatter
from paste.translogger import TransLogger
from pandas import DataFrame
from yfinance import Ticker
from waitress import serve

app = Flask(__name__)


def generate_graph(title: str, df: DataFrame) -> str:
    figure = Figure()
    figure.add_trace(Scatter(x=list(df.High.keys()), y=list(df.High)))
    figure.update_layout(title_text=title)
    figure.update_layout(
        xaxis=dict(
            rangeselector=dict(
                buttons=list([
                    dict(count=1, label="1m", step="month", stepmode="backward"),
                    dict(count=6, label="6m", step="month", stepmode="backward"),
                    dict(count=1, label="YTD", step="year", stepmode="todate"),
                    dict(count=1, label="1y", step="year", stepmode="backward"),
                    dict(step="all")
                ])
            ),
            rangeslider=dict(visible=True),
            type="date"
        )
    )
    return figure.to_json()


@app.route("/")
def index():
    stock = request.args.get("stock", "").strip()

    ticker = Ticker(stock)
    history = ticker.history(period="max", debug=False)
    year_history = history[-365:]

    if history.empty:
        return render_template("index.html")

    graph = generate_graph(ticker.info["shortName"], history)
    return render_template(
        "stock.html",
        stock=stock,
        graph=graph,
	prev_close=f"${ticker.info['regularMarketPreviousClose']}",
	day_range=f"${ticker.info['dayLow']} - ${ticker.info['dayHigh']}",
	year_range=f"${round(min(year_history.Low), 2)} - ${round(max(year_history.High), 2)}",
	dividend=str(round(ticker.info["dividendYield"] * 100, 2)) + "%" if ticker.info.get("dividendYield") else "-",
	pe=round(ticker.info["trailingPE"], 2) if ticker.info.get("trailingPE") else "-",
	website=ticker.info["website"].replace("https://www.", "") if ticker.info.get("website") else "-",
	employees=ticker.info["fullTimeEmployees"] if ticker.info.get("fullTimeEmployees") else "-"
    )


@app.route("/privacy")
def privacy():
    return render_template("privacy.html")


if __name__ == "__main__":
    serve(TransLogger(app, setup_console_handler=False), host="0.0.0.0", port=80, url_scheme="https")
