sudo docker build --tag stockgraph .
sudo docker run -d --publish 5000:80 stockgraph
firefox localhost:5000