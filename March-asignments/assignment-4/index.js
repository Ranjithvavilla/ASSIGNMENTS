var h1 = document.getElementById("error_404");

    function delay(delayInms) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(3);
          }, delayInms);
        });
      }
      
async function error_404() {
    let delayres0 = await delay(2000);
    h1.innerText ="Unable to Connect to Server." ;
    let delayres1 = await delay(2000);
    h1.innerText ="Unable to Connect to Server.." ;
    let delayres2 = await delay(2000);
    h1.innerText ="Unable to Connect to Server...!" ;
    let delayres3 = await delay(2000);
    h1.innerText ="Unable to Connect to Server" ;

    error_404();

  }
error_404();