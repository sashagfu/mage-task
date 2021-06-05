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

Commands that I executed:

```
composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition= .
```

```
bin/magento setup:install \
  --base-url=http://localhost \
  --db-host=mysql \
  --db-name=magento \
  --db-user=root \
  --db-password=root \
  --admin-firstname=admin \
  --admin-lastname=admin \
  --admin-email=admin@admin.com \
  --admin-user=admin \
  --admin-password=admin123 \
  --language=en_US \
  --currency=USD \
  --timezone=America/New_York \
  --use-rewrites=1 \
  --elasticsearch-host=elasticsearch \
  --elasticsearch-port=9200
```

```
find var generated vendor pub/static pub/media app/etc -type f -exec chmod g+w {} +
find var generated vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} +
chown -R :www-data . # Ubuntu
chmod u+x bin/magento
```
