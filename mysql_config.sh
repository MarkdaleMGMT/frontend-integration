#!/bin/bash

loop=''

until [ "$loop" == 'false'  ]; do

	#Prompt credentials
	echo -n "Enter server ip address: "
	read ip_address

	echo -n "Enter password for mysql user 'app': " 
	read password

	echo -n "Your ip_address and password entered: $ip_address and $password "
	echo -n "Is this corrrect? Enter 'y' or 'n': "
	read input

	if [ $input == 'y' -o $input == 'Y' ]
	then
		sqlfile='/var/www/frontend-integration/mysql.js'

		#Insert database credentials
		sed -i "/host/c\    host: '$ip_address'," $sqlfile
		sed -i "/user/c\    user: 'app'," $sqlfile
		sed -i "/password/c\    password: '$password'," $sqlfile
		sed -i "/database/c\    database: 'live'," $sqlfile
		sed -i "/multipleStatements/c\    multipleStatements: true," $sqlfile
		sed -i "/connectionLimit/c\    connectionLimit: 10" $sqlfile
		loop='false'
	fi
done
