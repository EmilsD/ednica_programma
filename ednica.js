  const cenu_saraksts_rimi = [0.72, 0.49, 38, 1.98, 4.83, 5.49, 3.46];
  const cenu_saraksts_maxima = [];
  
  function cena_rimi () {
  
    let burkani = Number(document.forms["ievaddati"]["burkani"].value);
    let kartupeli = Number(document.forms["ievaddati"]["kartupeli"].value);
    let gala = Number(document.forms["ievaddati"]["gala"].value);
    
    return(burkani*cenu_saraksts_rimi[0]+kartupeli*cenu_saraksts_rimi[1]+gala*cenu_saraksts_rimi[2]);
  
  }
  
  if (cena_rimi > cena_maxima) {
    document.forms["ievaddati"]["kop_cena"].value = cena_maxima;
  } else {
    document.forms["ievaddati"]["kop_cena"].value = cena_rimi;
  }
