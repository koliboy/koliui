<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
 <meta name="viewport" content="width=device-width">
 <title>smaple</title>  <!-- defulat  scropts-->
<script src="https://data.js.gilob.in/console.js"></script>
<script src="https://data.js.gilob.in/ssall.js"></script>        
        <script src="https://data.js.gilob.in/http3.js"></script>     
        <script src="https://data.js.gilob.in/theme.js"></script>  
        <script src="https://data.js.gilob.in/userAgent.js"></script>          
                
            
 <style> 
      .test {
          height:100%; background:rgba(247, 247, 247, 1);
           padding:30px;
      }
 </style>       
 
  <!--UIweb-->
 <style>
      
     
      
      [form] [scroll-br] {
    scrollbar-width: thin;
}  

@media (min-width: 768px){
   
   
 [form] [scroll-br]::-webkit-scrollbar {
  width: 8px; 
}
[form] [scroll-br]::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


[form] [scroll-br]::-webkit-scrollbar-thumb:active {
  background: #777; 
}

 [form] [scroll-br]::-webkit-scrollbar-thumb {
  background: rgba(209, 209, 209, 0.94); 
  border-radius: 6px; 
}

}
 
[none-scroll] {
      scrollbar-width: none;
 } 
  
 [none-scroll]::-webkit-scrollbar {
  width: 0px;
  display: none; 
   background-color:none;
}
 [none-scroll]::-webkit-scrollbar-thumb{
     background: rgba(0, 0, 0, 0);
 } 
 

@keyframes form-input-right-checking {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

    

      [form]{
       
        background: none;
       /* min-height: 40px; */
       
         --brand-color:rgba(88, 0, 240, 1);
         --brand-second-color:black;
        
         --border-color:rgba(133, 133, 133, 0.30);
         --border-color-active:var(--brand-second-color); /* you can chnage forced */
         --border-width:1px;
         --border-style:solid;
         --border-radius:5px;
         --font-size:18px;
         --min-height:40px;
        
         
         
         --color:hsla(0, 0%, 24%, 1);
         --color-active:white;
         --background-color:white;
         --disabled-bacground:rgba(250, 250, 250, 0.08);
          --disabled-opacity:0.50;
         --left-background:rgba(240, 240, 240, 0.50);
         --placeholder-color:hsla(0, 0%, 24%, 1);
         --ul-hover:rgba(148, 148, 148, 0.10); 
         
         --right-icon-fill:rgba(133, 133, 133, 0.70);
         
         --checkmark-fill:black;
         --checking-fill:black;
         --redio-height:20px;
         --icon-size:calc(var(--font-size) + 5px);   /* you can chnage forced */
         --transition-time: 200ms;
         
        
         
          
      }
      
      
      
      [form] input {
          border:none;
      }
      
      [form-font-size] {
          font-size: var(--font-size);
      }
      
      
      [form-input-color]{
            color:var(--color);
     }
        
      [form] {
          display: grid;    
        }
      
      [form] [form-label]{
        font-size: 19px;
          width: 95%;
           margin-bottom: 15px;
         white-space: normal;   word-break: break-all;
        }
        
        
        
        [form-user-select] {
            user-select: none; /*selction not allowd*/
        }
        [form-cursor] {
            cursor: pointer;
        }
        [form-cursor-not-allowed] {
           cursor: not-allowed;
        }
        
      
      [area=input] label {
            margin-bottom:13px;
        }  
      
      [form] [padding]{
           padding:5px 10px 5px 10px;
      }
        
      
      
      
     
      /*[form] [hover]:hover{ 
          background:  black; color:white; 
      }*/
     
      [form-input-right-icon]{
             height:var(--icon-size); width:var(--icon-size);   fill:var(--right-icon-fill); 
           position: absolute;
           padding:0;
            right: 10px;
            border-radius: var(--border-radius);
            background: var(--background-color);
           
         }
         
      [form-input-left-icon]{
            display: flex;
             position: absolute;
              padding-left:10px;
               padding-right:10px;
          height:var(--icon-size); width:var(--icon-size);   
          fill:rgba(133, 133, 133, 0.70);
            
            
             
         }
       
      [form-input-placeholder]::placeholder {
           color:var(--placeholder-color);
           opacity: 0.5;
      }  
      
     [form-text-width] {
           position: relative !important;
           padding-right: 10px;
           width: 100% !important;
           margin-right:50px;
            box-sizing: content-box;
           }
           
    
    
    [form-input-left-text] {
             /*  padding-left:10px !important;*/
              width: auto;
             /* padding-right: 10px !important;*/
             height: 100%;
             display: grid;
            align-items: center !important; 
             /*border-right: solid 1px;*/
              width: 100%;
             justify-content: center;
             word-break: break-all !important;
           color:hsla(0, 0%, 24%, 0.90);
           box-sizing: border-box;
          
             
         }
    
      
      [form-border] {
          border:var(--border-style) var(--border-width) var(--border-color);
          border-radius:var(--border-radius);
      }
      
     
      [form-border-left-text] {
          border-right:var(--border-style) var(--border-width) var(--border-color);
          
      }
      
      [form-border]:hover {
          border-color:var(--border-color-active);
      }
       
      
    
      
      
      div[form=input] [form-input-right-icon] {
           display: none;
        }
        
      
      
        
        
</style>   
 
<style>
      div[form=select] { 
           width: auto;  display: grid; 
          padding:0; 
          min-height: var(--min-height);
          background-color:var(--background-color);
           position: relative;
          
           user-select: none; 
         
      }
      
      div[form=select][focus] {
          border-color:var(--border-color-active);
      }
      div[form=select] [contents]{
          display: none;
      }
      
      div[form=select][open]{
           box-shadow: 1px 10px 10px 5px rgba(0, 0, 0, 0.1);
      }
      div[form=select][open] [contents]{
          display: block;
      }
      
        div[form=select][disabled]{
         cursor: not-allowed; 
        background: var(--disabled-bacground);
       opacity: var(--disabled-opacity);
      } 
       div[form=select][disabled]:hover {
            border-color:var(--border-color); 
       }
         div[form=select] [sel-disabled] {
             display: none;
         }
         
        div[form=select][disabled] [sel-disabled]{
            display: block;
            position: absolute;  height: 100%;  width: 100%;
            background: none;
        }
        
        div[form=select] [options] [select-ul][disabled]{
             cursor: not-allowed; 
        background: var(--disabled-bacground);
         opacity: var(--disabled-opacity);
        }
      
      
        
       div[form=select] [input] {
           display: flex; 
          /* justify-content: center;*/
           align-items: center;
            position: relative;
            box-sizing: border-box;
            background: none;
            
       }
      
       div[form=select]  [select-ul-search] {
           min-height: var(--min-height);
           display: none;
           position: relative;
            
           
          height: auto !important;
           align-items: center;
            box-sizing: content-box;
            border-bottom: var(--border-style) var(--border-width) var(--border-color-active);
            
      }
       div[form=select] [select-ul-search] input {
           outline: none;
            height: 90%;
           padding-left: 10px;
          background:none;
          color:var(--placeholder-color);
          opacity: 0.50;
           margin-left: 25px;
           font-size: calc(var(--font-size) * 0.90 );
       }
       
        div[form=select] [select-ul-search] [form-input-left-icon]{
            height:calc(var(--icon-size) * 0.80); width:calc(var(--icon-size) * 0.80); fill:var(--right-icon-fill);
        }
       
       div[form=select][search="true"]  [select-ul-search]{
           display: flex;
       }
       
      
       div[form=select] [options] {
       
        width:auto; display: grid; 
          margin-top:10px;/*box-shadow: 1px 10px 10px 5px rgba(0, 0, 0, 0.1);*/
          max-height: 200px; overflow-x:auto;
          margin-bottom: 5px;
         
         /*display: noned;*/
      }
      
     
       
       div[form=select] [options] [select-ul] {
           display: flex;
          align-items: center;
           position: relative;
            white-space: normal;   word-break: break-all;
           padding-top:6px; padding-bottom:6px; margin-top:5px;  margin-bottom:5px;
           transition: background 50ms ease-in;
           
          
       }
        div[form=select][selectType="left-icon"] [options] [form-text-width] {
            margin-left:calc(var(--icon-size) + calc(var(--icon-size) * 0.90)); 
            
        }
       div[form=select] [options] [select-ul]:hover {
           background: var(--ul-hover);
       }
        
        div[form=select] [options] [select-ul][selected] {
           background:var(--ul-hover); 
       }
       
       div[form=select] [options] [select-ul] [form-text-width]{
           padding-left:10px;
       }
       
        div[form=select] [options] [select-ul][selected] [form-input-right-icon]{
            display: block; background: none; fill:var(--brand-second-color);
        }
         
      div[form=select] [multiple-remain]{
              display: none;
          }
         
         div[form=select][multiple][size] [multiple-remain] {
         display: flex; column-gap: 3px;
         
         
     }
      div[form=select] [multiple-remain] [done]{
            color:var(--brand-second-color);
      }
      div[form=select] [multiple-remain] [remain]{
            opacity: 0.60;
      }
       
         @media (max-width: 768px){
            
            div[form=select] [options]  {
                max-height:90%;
                scrollbar-width: none;
            } 
            
            div[form=select] [options]::-webkit-scrollbar {
               width: 0px;
               display: none; 
                background-color:none;
                 }
          div[form=select] [options]::-webkit-scrollbar-thumb{
            background: rgba(0, 0, 0, 0);
            } 
             
        
        
         }
         
       
     
  </style> 
  
 <style>
  div[form=input] {
     display: flex;
     height: auto;
     /*justify-content: center;*/
     align-items: center;
     position: relative;
     min-height: var(--min-height);
     background-color: var(--background-color);

 }

 div[form=input] input {
     outline: none;
     /*border-radius: 5px;*/
     height: 90%;
     padding-left: 10px;
     background: none;

 }
 div[form=input]  textarea { 
     outline: none;
     /*border-radius: 5px;*/
    /* height: 90%;*/
     padding-left: 10px;
     background: none;
     border:none;

 }

 [form] [erro-text-hide] {
     display: none;
 }

 [form] [form-input-error-text] {
     color: rgba(219, 0, 0, 1);
     display: block;
     font-size: calc(var(--font-size) + 5px);
 }


 div[form=input][formtype=left-icon] input {
     margin-left:calc(var(--icon-size) + calc(var(--icon-size) * 0.90)); 

 }

 div[form=input][formtype=left-text] [form-input-left-text] {
     background: var(--left-background);
    

 }


 div[form=input][form-input-error] {
     border: solid var(--border-width) rgba(250, 0, 0, 0.39);

 }

 div[form=input][form-input-error] input {
     color: red;
 }

 div[form=input][form-input-error]:hover {
     border-color: red;
 }





 div[form=input] [form-input-right-checkmark] {
     display: none;
     fill: var(--brand-second-color);
 }

 div[form=input] [form-input-right-checking] {
     fill: var(--brand-second-color);
     animation: form-input-right-checking 2s linear infinite;
     display: none;
     
 }

 div[form=input][form-input-checking] [form-input-right-checking] {
     display: flex;

 }

 div[form=input][checkmark=true] [form-input-right-checkmark] {
     /*User defult Conf optional*/
     /*<div form="input" checkmark="true"  defult set*/
     display: block;

 }


 div[form=input][form-input-error] [form-input-right-error] {
     display: block;
     fill: red;
 }

 div[form=input] input:disabled  {
     cursor: not-allowed;
    
 }

 div[form=input][form-input-disabled]  {
     cursor: not-allowed; 
     background: var(--disabled-bacground);
     opacity: var(--disabled-opacity);
 }
 div[form=input][form-input-disabled]:hover {
     border-color:var(--border-color);
 }
 div[form=input][type="password"][visibleType="icon"] [pass-icons] {
     background:red;  width: auto !important;
     position: absolute;
      right: 0;
      display: flex;align-items: center;
    
 }
 
 div[form=input][type="password"][visibleType="icon"] [pass-icon]:first-child{
     display: block;
     
   
}

 div[form=input]  input[type="date"] {
     margin-right: 2px;
 }


 div[form=input]  textarea {
     margin-right: 0;
 }
 
[form=redio][type="radio"] {
     appearance: none; 
  -webkit-appearance: none;
  -moz-appearance: none;
  width: var(--redio-height);
  height:var(--redio-height);
  border:solid var(--border-width) var(--border-color);
  border-radius: 50%;
  outline: none;
  cursor: pointer;  
  background: var(--background-color);
  transition: var(--transition-time) ease-in-out;
  
    
 }

[form=redio][type="radio"]:disabled{
   background: var(--disabled-bacground);
     opacity: var(--disabled-opacity);
     cursor: not-allowed; 
}


 
[form=redio][type="radio"]:checked {
    border: 6px solid  var(--brand-color);

}

@media (max-width: 768px){
    div[form=input]  input[type="date"] {
     margin-right: 10px;
 } 
} 




   </style> 

<!--mobile bottom-action-bar-->   
 <!--<script src="https://data.js.gilob.in/formui/main.js"></script>    
 <link href="https://data.js.gilob.in/formui/main.css" rel="stylesheet" type="text/css"> -->
   </head>
    <body>

    
    


 
<div class="test">
    <div  form style="margin-top:30px">
       <label form-label>Select</label> <!-- or multiple size="6",disabled-->
    <div form="select" ui-setup="true" search="true"  selectType="left-icon"  form-border   form-font-size form-input-color>
       <div input form-cursor padding form-font-size> <text form-text-width>Please choos</text>
     <svg form-input-right-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M11 3L11 17.070312L6.4296875 12.5L4.9296875 14L12 21.070312L19.070312 14L17.570312 12.5L13 17.070312L13 3L11 3 z" />
</svg>
</div>

<div contents>
 <mobile c max-height="90%" form="bottom-bar" >
               
        <div select-ul-search>
            <svg form-input-left-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M9 2C5.1458514 2 2 5.1458514 2 9C2 12.854149 5.1458514 16 9 16C10.747998 16 12.345009 15.348024 13.574219 14.28125L14 14.707031L14 16L20 22L22 20L16 14L14.707031 14L14.28125 13.574219C15.348024 12.345009 16 10.747998 16 9C16 5.1458514 12.854149 2 9 2 z M 9 4C11.773268 4 14 6.2267316 14 9C14 11.773268 11.773268 14 9 14C6.2267316 14 4 11.773268 4 9C4 6.2267316 6.2267316 4 9 4 z"/>
</svg>
                    <input  type="text" form-text-width  form-input-placeholder placeholder="find"> 
                   
                    
               </div>
        <div  multiple-remain padding form-font-size><span done>0</span>/<span remain>0</span></div>
    <!--options-->
   
       <div options scroll-br>  
       
               
               <div select-ul    form-font-size form-cursor value="dog" selected>
                <svg form-input-left-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9.6660156 2L9.1757812 4.5234375C8.3516137 4.8342536 7.5947862 5.2699307 6.9316406 5.8144531L4.5078125 4.9785156L2.171875 9.0214844L4.1132812 10.708984C4.0386488 11.16721 4 11.591845 4 12C4 12.408768 4.0398071 12.832626 4.1132812 13.291016L4.1132812 13.292969L2.171875 14.980469L4.5078125 19.021484L6.9296875 18.1875C7.5928951 18.732319 8.3514346 19.165567 9.1757812 19.476562L9.6660156 22L14.333984 22L14.824219 19.476562C15.648925 19.165543 16.404903 18.73057 17.068359 18.185547L19.492188 19.021484L21.826172 14.980469L19.886719 13.291016C19.961351 12.83279 20 12.408155 20 12C20 11.592457 19.96113 11.168374 19.886719 10.710938L19.886719 10.708984L21.828125 9.0195312L19.492188 4.9785156L17.070312 5.8125C16.407106 5.2676813 15.648565 4.8344327 14.824219 4.5234375L14.333984 2L9.6660156 2 z M 11.314453 4L12.685547 4L13.074219 6L14.117188 6.3945312C14.745852 6.63147 15.310672 6.9567546 15.800781 7.359375L16.664062 8.0664062L18.585938 7.40625L19.271484 8.5917969L17.736328 9.9277344L17.912109 11.027344L17.912109 11.029297C17.973258 11.404235 18 11.718768 18 12C18 12.281232 17.973259 12.595718 17.912109 12.970703L17.734375 14.070312L19.269531 15.40625L18.583984 16.59375L16.664062 15.931641L15.798828 16.640625C15.308719 17.043245 14.745852 17.36853 14.117188 17.605469L14.115234 17.605469L13.072266 18L12.683594 20L11.314453 20L10.925781 18L9.8828125 17.605469C9.2541467 17.36853 8.6893282 17.043245 8.1992188 16.640625L7.3359375 15.933594L5.4140625 16.59375L4.7285156 15.408203L6.265625 14.070312L6.0878906 12.974609L6.0878906 12.972656C6.0276183 12.596088 6 12.280673 6 12C6 11.718768 6.026742 11.404282 6.0878906 11.029297L6.265625 9.9296875L4.7285156 8.59375L5.4140625 7.40625L7.3359375 8.0683594L8.1992188 7.359375C8.6893282 6.9567546 9.2541467 6.6314701 9.8828125 6.3945312L10.925781 6L11.314453 4 z M 12 8C9.8034768 8 8 9.8034768 8 12C8 14.196523 9.8034768 16 12 16C14.196523 16 16 14.196523 16 12C16 9.8034768 14.196523 8 12 8 z M 12 10C13.111477 10 14 10.888523 14 12C14 13.111477 13.111477 14 12 14C10.888523 14 10 13.111477 10 12C10 10.888523 10.888523 10 12 10 z" />
              </svg>
               <text form-text-width>Commentsyhtythhthththrthrhrthrthrthrthrhrthrthrthrt</text>
               <svg form-input-right-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M11,16.4l-4.7-4.7l1.4-1.4l3.3,3.3l8.4-8.4C17.5,3.3,14.9,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10 c0-1.9-0.5-3.6-1.4-5.1L11,16.4z"/>
</svg>
               </div>
              <div select-ul form-font-size  disabled  value="dog">
                 <svg  form-input-left-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M20.292969 5.2929688L9 16.585938L4.7070312 12.292969L3.2929688 13.707031L9 19.414062L21.707031 6.7070312L20.292969 5.2929688 z"/>
</svg>    
               <text form-text-width>disabled</text>
               
<svg form-input-right-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z"/>
</svg>
               </div>
               <div select-ul form-font-size    value="dog">
                 <svg  form-input-left-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M20.292969 5.2929688L9 16.585938L4.7070312 12.292969L3.2929688 13.707031L9 19.414062L21.707031 6.7070312L20.292969 5.2929688 z"/>
</svg>    
               <text form-text-width>India</text>
               
<svg form-input-right-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z"/>
</svg>
               </div>
              
       </div> <!--options-->
       </mobile>
        </div> 
          <div sel-disabled></div> 
    </div>
    
     </div> 
    
    
    
    
</div> 

<script>

/*setup 2*/

 var select_steup2 = document.querySelectorAll('div[form="select"][ui-setup="true"]'); 

select_steup2.forEach(function(e){
     e.onclick = function(){
         document.console = "haaa"
     }
})

































</script>











  </body>
</html>

