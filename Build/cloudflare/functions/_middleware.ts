export const onRequest: PagesFunction = async (context) => {
  //let reqHeaders = new Headers(context.headers),
  const response = await context.next();
  
  //response.headers.set('Access-Control-Allow-Origin', reqHeaders.get('Origin') || reqHeaders.get('Referer') || "*");
  response.headers.set('Access-Control-Allow-Origin', 'http://lampa.mx');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Methods', '*');
  response.headers.set('Access-Control-Allow-Headers', '*');
  return response;
};
