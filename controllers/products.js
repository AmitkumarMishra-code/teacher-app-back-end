var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.sellbrite.com/v1/inventory',
  headers: { 
    'Authorization': 'Basic NTgxODEyYTctZWQ5OS00YmExLTk1ZWItOGM0MzYyZGFlN2E3OmE4MmNjZjA0ZGVmMTVmM2IzYmY5Nzg3N2VmZDE2M2Zk'
  }
};

axios(config)
.then(function (response) {
    console.log("1")
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
    console.log("2")
  console.log(error);
});
