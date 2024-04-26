export const getProviderData=(id)=>{
  return fetch(`./../data/provider_${id}.json`
  ,{
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
