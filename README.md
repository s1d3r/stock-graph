# Stock Graph v0.1
> Financial charts for everyone
## Installation
With docker:
```
git clone https://github.com/s1d3r/stock-graph
cd stock-graph
docker build --tag stockgraph .
docker run -d --publish 5000:80 stockgraph
firefox localhost:5000
```
Without docker:
```
git clone https://github.com/s1d3r/stock-graph
cd stock-graph
pip install -r requirements.txt
python app.py
```
