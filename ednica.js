  const cenu_saraksts_rimi = [0.72, 0.49, 38, 1.98, 4.83, 5.49, 3.46];
  const cenu_saraksts_maxima = [0.49, 0.29, 42, 2.18, 4.83, 5.38, 3.86];
  
  function cena_calculator () {
  
    let burkani = Number(document.forms["ievaddati"]["burkani"].value);
    let kartupeli = Number(document.forms["ievaddati"]["kartupeli"].value);
    let gala = Number(document.forms["ievaddati"]["gala"].value);
    let alus = Number(document.forms["ievaddati"]["alus"].value);
    let bagete = Number(document.forms["ievaddati"]["bagete"].value);
    let siers = Number(document.forms["ievaddati"]["siers"].value);
    let makaroni = Number(document.forms["ievaddati"]["makaroni"].value);
    
    cena_rimi = (burkani*cenu_saraksts_rimi[0]+kartupeli*cenu_saraksts_rimi[1]+gala*cenu_saraksts_rimi[2]+alus*cenu_saraksts_rimi[3]+bagete*cenu_saraksts_rimi[4]+siers*cenu_saraksts_rimi[5]+makaroni*cenu_saraksts_rimi[6]);
    cena_maxima = (burkani*cenu_saraksts_maxima[0]+kartupeli*cenu_saraksts_maxima[1]+gala*cenu_saraksts_maxima[2]+alus*cenu_saraksts_maxima[3]+bagete*cenu_saraksts_maxima[4]+siers*cenu_saraksts_maxima[5]+makaroni*cenu_saraksts_maxima[6]);
    
    if (cena_rimi < cena_maxima) {
      document.forms["ievaddati"]["kop_cena"].value = cena_rimi;
      document.forms["ievaddati"]["veikals"].value = "rimi";
    } else {
      document.forms["ievaddati"]["kop_cena"].value = cena_maxima;
      document.forms["ievaddati"]["veikals"].value = "maxima";
    }
    
  
  }
