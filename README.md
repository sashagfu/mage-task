# Magento footer customization task

cd `Project-path/magedock` and run command

```
docker-compose up -d
```

Get PMA IP address

```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mg-pma
```

Run a command in a running workspace container

```
docker exec -it mg-php bash
```
