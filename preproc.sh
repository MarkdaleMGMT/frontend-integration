#!/bin/bash

loop=''

until [ "$loop" == 'false'  ]; do

	#Prompt credentials
	echo -n "Enter server ip address with format eg. xxx.xxx.xxx.xx: "
	read ip_address

	echo -n "Enter password for mysql user 'app': " 
	read password

	echo -n "Your ip_address and password entered: $ip_address and $password "
	echo -n "Is this corrrect? Enter 'y' or 'n': "
	read input

	if [ $input == 'y' -o $input == 'Y' ]
	then
		sqlfile='/var/www/frontend-integration/mysql.js'

		#MySql configuration
		sed -i "/host/c\    host: '$ip_address'," $sqlfile
		sed -i "/user/c\    user: 'app'," $sqlfile
		sed -i "/password/c\    password: '$password'," $sqlfile
		sed -i "/database/c\    database: 'live'," $sqlfile
		sed -i "/multipleStatements/c\    multipleStatements: true," $sqlfile
		sed -i "/connectionLimit/c\    connectionLimit: 10" $sqlfile

		#Set enviroment IP
        cd /var/www/frontend-integration/src/pages/SignUpPanel
        sed -i "s|http://localhost:8080|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3000|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3001|http://$ip_address|g" *.js
        sed -i "s|http://138.197.175.92|http://$ip_address|g" *.js

        cd /var/www/frontend-integration/src/pages/LoginPanel
        sed -i "s|http://localhost:8080|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3000|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3001|http://$ip_address|g" *.js
        sed -i "s|http://138.197.175.92|http://$ip_address|g" *.js

        cd /var/www/frontend-integration/src/pages/Forgot
        sed -i "s|http://localhost:8080|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3000|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3001|http://$ip_address|g" *.js
        sed -i "s|http://138.197.175.92|http://$ip_address|g" *.js

        cd /var/www/frontend-integration/src/components
        sed -i "s|http://localhost:8080|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3000|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3001|http://$ip_address|g" *.js
        sed -i "s|http://138.197.175.92|http://$ip_address|g" *.js

        cd /var/www/frontend-integration/src/app/frontend
        sed -i "s|http://localhost:8080|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3000|http://$ip_address|g" *.js
        sed -i "s|http://localhost:3001|http://$ip_address|g" *.js
        sed -i "s|http://138.197.175.92|http://$ip_address|g" *.js
		loop='false'

        # NGINX config
        sed -i  '21, $d'  /etc/nginx/sites-available/default

        server_code='server {
                listen 80 default_server;
                listen [::]:80 default_server;
                # SSL configuration
                #...
                root /var/www/html;
                index index.php index.html index.htm index.nginx-debian.html;
                server_name;
                location / {
                        proxy_pass http://localhost:3000;
                        proxy_http_version 1.1;
                        proxy_set_header Upgrade $http_upgrade;
                        proxy_set_header Connection 'upgrade';
                        proxy_set_header Host $host;
                        proxy_cache_bypass $http_upgrade;
                }
                location /phpmyadmin {
                }
                location ~ \.php$ {
                        include snippets/fastcgi-php.conf;
                        root /usr/share/;
                        fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
                }
                location ~ \.(.+\.(jpg|jpeg|gif|css|png|js|ico|html|xml|txt))$ {
                        root /usr/share/phpmyadmin;
                }
                location ~ /\.ht {
                        deny all;
                }
                location /dashboard {
                        alias /var/www/frontend-integration/build;
                }
                location ^~ /static {
                        alias /var/www/frontend-integration/build/static;
                        try_files $uri =404;
                }
                location /forgot {
                        alias /var/www/frontend-integration/build;
                }
                location /signup {
                        alias /var/www/frontend-integration/build;
                }
                location /login {
                        alias /var/www/frontend-integration/build;
                }
                location ^~ /frontend {
                        proxy_pass http://localhost:3001;
                        proxy_http_version 1.1;
                        proxy_set_header Upgrade $http_upgrade;
                        proxy_set_header Connection 'upgrade';
                        proxy_set_header Host $host;
                        proxy_cache_bypass $http_upgrade;
                }
        }

        ## To track where nginx is redirecting the path location ##
        log_format requests    " $request_filename ";

        access_log /var/log/nginx/access.log requests;
        '

        # Append server code
        echo "$server_code" >> /etc/nginx/sites-available/default

        sed -i "/server_name/c\        server_name $ip_address;" /etc/nginx/sites-available/default   
        fi

done



# echo "What is your server ip? Input in the format with http:// e.g. http://xxx.xxx.xx.xx"
# read server
# read -p "Are you sure your IP is $server? (y/n) " -n 1 -r
# echo   
# if [[ ! $REPLY =~ ^[Yy]$ ]]
# then
#     [[ "$0" = "$BASH_SOURCE" ]] && exit 1 || return 1 
# fi
# server=$(echo "$server" | sed 's/\./\\\./g')

# cd /var/www/frontend-integration/src/pages/SignUpPanel
# sed -i "s|http://localhost:8080|$server|g" *.js
# sed -i "s|http://localhost:3000|$server|g" *.js
# sed -i "s|http://localhost:3001|$server|g" *.js
# sed -i "s|http://138.197.175.92|$server|g" *.js

# cd /var/www/frontend-integration/src/pages/LoginPanel
# sed -i "s|http://localhost:8080|$server|g" *.js
# sed -i "s|http://localhost:3000|$server|g" *.js
# sed -i "s|http://localhost:3001|$server|g" *.js
# sed -i "s|http://138.197.175.92|$server|g" *.js

# cd /var/www/frontend-integration/src/pages/Forgot
# sed -i "s|http://localhost:8080|$server|g" *.js
# sed -i "s|http://localhost:3000|$server|g" *.js
# sed -i "s|http://localhost:3001|$server|g" *.js
# sed -i "s|http://138.197.175.92|$server|g" *.js

# cd /var/www/frontend-integration/src/components
# sed -i "s|http://localhost:8080|$server|g" *.js
# sed -i "s|http://localhost:3000|$server|g" *.js
# sed -i "s|http://localhost:3001|$server|g" *.js
# sed -i "s|http://138.197.175.92|$server|g" *.js

# cd /var/www/frontend-integration/src/app/frontend
# sed -i "s|http://localhost:8080|$server|g" *.js
# sed -i "s|http://localhost:3000|$server|g" *.js
# sed -i "s|http://localhost:3001|$server|g" *.js
# sed -i "s|http://138.197.175.92|$server|g" *.js
# echo "Cleaning complete"

