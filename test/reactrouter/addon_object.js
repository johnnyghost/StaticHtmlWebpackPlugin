import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {RoutingContext, match} from 'react-router';


module.exports = function(routes){
  return {'react-router' : {
    getPaths: function(parser){
      return parser(routes)
    },
    buildHtml: function(path, callback){
       match({ routes, location: path }, (error, redirectLocation, renderProps) => {
         callback(renderToStaticMarkup(<RoutingContext {...renderProps} />))
       })
    }
  }
}
}
