# docker_scaling_with_node
This is a test repository for docker  container scaling and nginx load balancing with a node js app 

# How to run the application 

1. Open your terminal in the project root path
2. Run "docker compose up scale server=2" command 

That's It! 

To see your 2 node api containers run "docker compose ps" you will see 2 containers with your node api nginx will load balance to these 2  api's when requeseted. To test this you can run a curl request 

"curl localhost:3000" this will show you the hostname of the api container your request goes to.

Thank you!

