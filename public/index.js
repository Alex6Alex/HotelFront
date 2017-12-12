import React from 'react'

import Routes from '../app/routes/Routes'

export default class Index extends React.Component {
	render(){
		return(
			<html>
				<head>
					<meta charSet='utf-8'/>
					<script src='https://use.fontawesome.com/5be1a557e9.js'></script>
					<script src='https://api-maps.yandex.ru/2.1/?lang=ru_RU' type='text/javascript'></script>
					<title>
						Chat application
					</title>
					<link rel='stylesheet' href='styles/style.css'/>
					<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'/>
				</head>
				<body>
					<Routes/>
					<script src='client.min.js'></script>
				</body>
			</html>
		)
	}
}
