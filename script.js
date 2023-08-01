// Java Script functions 
// Calcolo del codice fiscale
// (c) Copyright 2023 Gianluca Stranges
// start          : 26/07/2023
// ultima modifica: 1/08/2023

// Autore:
// -----------------------------
// Gianluca Stranges
// oem.web@icloud.com
// 
// -----------------------------

// Variables:
// --------------------------------------------------------------------------

var strCodFis="";
var strcognome="";
var strnome="";
var strgiornosex="";
var chrcontrollo='';
var Anno_convertito='';
var Mese_convertito='';
var Comune="";

// Controls/Definitions:
// --------------------------------------------------------------------------
DefaultValues();

// --------------------------------------------------------------------------

// Functions:

// --------------------------------------------------------------------------
// Setta i prodotti ed i valori di default
// --------------------------------------------------------------------------
function DefaultValues()
{
 strCodFis="";
 strcognome="";
 strnome="";
 strgiornosex="";
 chrcontrollo='';
 Anno_convertito="";
 Mese_convertito="";
 Cognome = "";
 Nome = "";
 Sesso = 0;
 Comune = "";
 CodiceFiscale = "";
 AnnoCento = "";
 AnnoDieci = "";
 AnnoZero = "";
 Mese = "A";
 Giorno = 1;
 
return;
}


function GetData() {
            // Ottendo elemento da data
            var dateInput = document.getElementById('data');

            // ottento  (date)
            var selectedDate = dateInput.value;

            // Crea un nuovo oggetto Date con il valore data selezionato
            var dateObject = new Date(selectedDate);

            // Ottengo i valori di giorno, mese e anno da dateObject
            Giorno = dateObject.getDate();
            mese = dateObject.getMonth() + 1; // Aggiungo 1 perché getMonth() restituisce valori da 0 a 11
            anno = dateObject.getFullYear();
            mese_convertito = "";
            // Estrazione dei valori
           // alert('Day: ' + day + '\nMonth: ' + month + '\nYear: ' + year);
            

            // Conversione dei valori del mese 
            switch (mese) {
        case 1:
            mese_convertito = "A";
            break;
        case 2:
            mese_convertito = "B";
            break;
        case 3:
            mese_convertito = "C";
            break;
        case 4:
            mese_convertito = "D";
            break;
        case 5:
            mese_convertito = "E";
            break;
        case 6:
            mese_convertito = "H";
            break;
        case 7:
            mese_convertito = "L";
            break;
        case 8:
            mese_convertito = "M";
            break;
        case 9:
            mese_convertito = "P";
            break;
        case 10:
            mese_convertito = "R";
            break;
        case 11:
            mese_convertito = "S";
            break;
        case 12:
            mese_convertito = "T";
            break;
        default:
            break;
            
    
    }
      Mese_convertito=mese_convertito;
 }

//--------------------------------------------------------------------------
function UpdateComune(Comune_return) {
   var result = Comune_return;
   return result;
}
// --------------------------------------------------------------------------








//--------------------------------------------------------------------------
function UpdateSesso(){
    
 if(document.FormCodFis.Sesso.value == 0)
   {
   
   return(0);

   }else{
    
   return(1);
   
   }

}
// --------------------------------------------------------------------------


function checkDate() {
   
var inputDate = document.getElementById('data');
    if (inputDate.value === "") {
        alert("Per favore, inserisci una data.");
        return(0);
    } else {
        return(1);
    }
}

// --------------------------------------------------------------------------









// --------------------------------------------------------------------------



function  executeBoth() {
  // checkDate();
   //GetData();
    
}









function CheckCognome()
{
 if(document.FormCodFis.Cognome.value.length < 1)
   {
    alert("Attenzione:\nManca il Cognome!");
    return(0);
   }
document.FormCodFis.Cognome.value = document.FormCodFis.Cognome.value.toUpperCase();
return(1);
}
// --------------------------------------------------------------------------
function CheckNome()
{
 if(document.FormCodFis.Nome.value.length < 1)
   {
    alert("Attenzione:\nManca il Nome!");
    return(0);
   }
document.FormCodFis.Nome.value = document.FormCodFis.Nome.value.toUpperCase();
return(1);
}

// --------------------------------------------------------------------------
function CheckComune()
{
 if(document.FormCodFis.Comune.value.length < 1)
   {
    alert("Attenzione:\nManca il Comune!");
    return(0);
   }
document.FormCodFis.Comune.value = document.FormCodFis.Comune.value.toUpperCase();
return(1);
}

// --------------------------------------------------------------------------
function CalcolaCodiceFiscale()
{
 var gs=0;
 var i=0;
 var somma=0;

 strCodFis="";
 strcognome="";
 strnome="";
 strgiornosex="";
 chrcontrollo='';
 



Sesso=UpdateSesso();  //Aggiornamento Sesso 

if(CheckCognome() && CheckNome() && checkDate())
 {



Giorno=Giorno; 
AnnoCento=anno.toString().substring(0, 2); //troncamento data di nascita 
AnnoDieci=anno.toString().substring(2, 3); //troncamento data di nascita
AnnoZero=anno.toString().substring(3, 4); //troncamento data di nascita
Mese=Mese_convertito; // conversione del mese esempio gennaio in 1 .....
//Comune=GetComune();





  // Processa il cognome
  //----------------------------------------------------------------
    for (i=0; i<document.FormCodFis.Cognome.value.length; i++) 
        {
         switch (document.FormCodFis.Cognome.value.charAt(i)) 
                {
                  case 'A':
                  case 'E':
                  case 'I':
                  case 'O':
                  case 'U': break;            
                  default : 
                  if((document.FormCodFis.Cognome.value.charAt(i)<='Z')&& (document.FormCodFis.Cognome.value.charAt(i)>'A'))
                   strcognome = strcognome + document.FormCodFis.Cognome.value.charAt(i);
                }
        }
    if (strcognome.length < 3) 
      {
       for (i=0; i<document.FormCodFis.Cognome.value.length; i++) 
          {
           switch (document.FormCodFis.Cognome.value.charAt(i)) 
                 {
                  case 'A':
                  case 'E':
                  case 'I':
                  case 'O':
                  case 'U': strcognome = strcognome + document.FormCodFis.Cognome.value.charAt(i);
                 }
          }
       if (strcognome.length < 3) 
         {
          for (i=strcognome.length; i<=3; i++) 
             { strcognome = strcognome + 'X'; }
         }
      }
   strcognome = strcognome.substring(0,3);
 //------------------------------------------------------------ 



  // processa il nome
  //----------------------------------------------------------------
    for (i=0; i<document.FormCodFis.Nome.value.length; i++) 
       {
        switch (document.FormCodFis.Nome.value.charAt(i)) 
              {
               case 'A':
               case 'E':
               case 'I':
               case 'O':
               case 'U': break;
               default:
 if((document.FormCodFis.Nome.value.charAt(i)<='Z')&& (document.FormCodFis.Nome.value.charAt(i)>'A'))
                  strnome = strnome + document.FormCodFis.Nome.value.charAt(i);
              }
       }
    if (strnome.length > 3) 
      {
        strnome = strnome.substring(0,1) + strnome.substring(2,4);
      } 
    else {
          if (strnome.length < 3) 
            {
             for (i=0; i<document.FormCodFis.Nome.value.length; i++) 
                {
                  switch (document.FormCodFis.Nome.value.charAt(i)) 
                        {
                         case 'A':
                         case 'E':
                         case 'I':
                         case 'O':
                         case 'U': strnome = strnome + document.FormCodFis.Nome.value.charAt(i);
                        }
                }
             if (strnome.length < 3) 
               {
                for (i=strnome.length; i<=3; i++) 
                   {strnome = strnome + 'X';}
               }
            }
          strnome = strnome.substring(0,3);
         }
 //--------------------------------------- Fine processa nome




 // processa giorno e sesso
 //--------------------------------------------
  gs = Giorno + (40 * Sesso);
  if(gs<10) strgiornosex = "0" + gs;
  else strgiornosex =  gs;
 //--------------------------------------------

 strCodFis = strcognome + strnome + AnnoDieci + AnnoZero + Mese + strgiornosex + Comune;
 

 // calcola la cifra di controllo
 //--------------------------------------------
    for (i=0; i<15; i++) 
       {
        if (((i+1) % 2) != 0) //caratteri dispari
          {
           switch (strCodFis.charAt(i)) 
                 {
                  case '0':
                  case 'A':{ somma += 1; break;}
                  case '1':
                  case 'B':{ somma += 0; break;}
                  case '2':
                  case 'C':{ somma += 5; break;}
                  case '3':
                  case 'D':{ somma += 7; break;}
                  case '4':
                  case 'E':{ somma += 9; break;}
                  case '5':
                  case 'F':{ somma += 13; break;}
                  case '6':
                  case 'G':{ somma += 15; break;}
                  case '7':
                  case 'H':{ somma += 17; break;}
                  case '8':
                  case 'I':{ somma += 19; break;}
                  case '9':
                  case 'J':{ somma += 21; break;}
                  case 'K':{ somma += 2; break;}
                  case 'L':{ somma += 4; break;}
                  case 'M':{ somma += 18; break;}
                  case 'N':{ somma += 20; break;}
                  case 'O':{ somma += 11; break;}
                  case 'P':{ somma += 3; break;}
                  case 'Q':{ somma += 6; break;}
                  case 'R':{ somma += 8; break;}
                  case 'S':{ somma += 12; break;}
                  case 'T':{ somma += 14; break;}
                  case 'U':{ somma += 16; break;}
                  case 'V':{ somma += 10; break;}
                  case 'W':{ somma += 22; break;}
                  case 'X':{ somma += 25; break;}
                  case 'Y':{ somma += 24; break;}
                  case 'Z':{ somma += 23; break;}
                 }
          } 
        else //caratteri pari
            {
              switch (strCodFis.charAt(i)) 
                 {
                  case '0':
                  case 'A':{ somma += 0; break;}
                  case '1':
                  case 'B':{ somma += 1; break;}
                  case '2':
                  case 'C':{ somma += 2; break;}
                  case '3':
                  case 'D':{ somma += 3; break;}
                  case '4':
                  case 'E':{ somma += 4; break;}
                  case '5':
                  case 'F':{ somma += 5; break;}
                  case '6':
                  case 'G':{ somma += 6; break;}
                  case '7':
                  case 'H':{ somma += 7; break;}
                  case '8':
                  case 'I':{ somma += 8; break;}
                  case '9':
                  case 'J':{ somma += 9; break;}
                  case 'K':{ somma += 10; break;}
                  case 'L':{ somma += 11; break;}
                  case 'M':{ somma += 12; break;}
                  case 'N':{ somma += 13; break;}
                  case 'O':{ somma += 14; break;}
                  case 'P':{ somma += 15; break;}
                  case 'Q':{ somma += 16; break;}
                  case 'R':{ somma += 17; break;}
                  case 'S':{ somma += 18; break;}
                  case 'T':{ somma += 19; break;}
                  case 'U':{ somma += 20; break;}
                  case 'V':{ somma += 21; break;}
                  case 'W':{ somma += 22; break;}
                  case 'X':{ somma += 23; break;}
                  case 'Y':{ somma += 24; break;}
                  case 'Z':{ somma += 25; break;}
                 }
            }
    }
   somma %= 26;
   switch (somma) 
         {
          case 0: {chrcontrollo='A'; break;}
          case 1: {chrcontrollo='B'; break;}
          case 2: {chrcontrollo='C'; break;}
          case 3: {chrcontrollo='D'; break;}
          case 4: {chrcontrollo='E'; break;}
          case 5: {chrcontrollo='F'; break;}
          case 6: {chrcontrollo='G'; break;}
          case 7: {chrcontrollo='H'; break;}
          case 8: {chrcontrollo='I'; break;}
          case 9: {chrcontrollo='J'; break;}
          case 10: {chrcontrollo='K'; break;}
          case 11: {chrcontrollo='L'; break;}
          case 12: {chrcontrollo='M'; break;}
          case 13: {chrcontrollo='N'; break;}
          case 14: {chrcontrollo='O'; break;}
          case 15: {chrcontrollo='P'; break;}
          case 16: {chrcontrollo='Q'; break;}
          case 17: {chrcontrollo='R'; break;}
          case 18: {chrcontrollo='S'; break;}
          case 19: {chrcontrollo='T'; break;}
          case 20: {chrcontrollo='U'; break;}
          case 21: {chrcontrollo='V'; break;}
          case 22: {chrcontrollo='W'; break;}
          case 23: {chrcontrollo='X'; break;}
          case 24: {chrcontrollo='Y'; break;}
          case 25: {chrcontrollo='Z'; break;}
         }
 //--------------------------------------------

document.FormCodFis.CodiceFiscale.value = strCodFis + chrcontrollo;

 }
 return; 
}



//----------------------------------------------------------------------------------------------------------------------------

   //script prelevazione dei comuni con relativo codice catastale 



     const url = 'https://raw.githubusercontent.com/matteocontrini/comuni-json/master/comuni.json'; 

      fetch(url)
        .then(response => response.json())
        .then(data => {
          let select = document.getElementById('comuni');
          for (let item of data) {
            let option = document.createElement('option');
            option.value = item.codiceCatastale; // Impostato come il codiceCatastale
            option.text = item.nome;
            select.add(option);
          }

          // Aggiungi un gestore dell'evento change  listner
           select.addEventListener('change', function() {
           Comune= this.value;
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        



 
//----------------------------------------------------------------------------------------------------------------------------








// --------------------------------------------------------------------------
//  END OF SCRIPT
// --------------------------------------------------------------------------

