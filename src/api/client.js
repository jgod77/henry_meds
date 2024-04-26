export const getClientData=(id)=>{
  return fetch(`./../data/client_${id}.json`
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

export const getTimeSlots=(providerId, date)=>{
  return fetch(`./../data/timeslots_for_${providerId}_on_${date}.json`
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
      return [];
    });
}
