var mydata = []
var concursante = ""
function validate() {
    var guess_input = document.getElementById("guess_input");
    text = guess_input.value
    if(text!=""){
        text = text.trim();
        text = removeTildesAndLowerCase(text)
        found = false;
        for (c of mydata) {
            if (c.concursante === text | c.concursante.includes(text+" ")) {
                found = true;
                break;
            }
        }

        if(found==true){
            // Get the table body element in which you want to add row
            let table = document.getElementById("tableBody");
           
            // Create row element
            let row = document.createElement("tr");
              
            // Create cells
            let c1 = document.createElement("td");
            let c2 = document.createElement("td");
            let c3 = document.createElement("td");
            let c4 = document.createElement("td");
            let c5 = document.createElement("td");
              
            // Insert data to cells
            
            //NOMBRE
            const image = document.createElement('img');
            image.src = './img/'+c.concursante.replace(/ /g, '_')+'.jpg'; // Replace with the actual path to your image
            image.alt = c.concursante; // Replace with appropriate alt text
            image.width = 100;
            image.height = 100;
            
            c1.innerText = c.concursante.charAt(0).toUpperCase() + c.concursante.slice(1) +"\n"
            if(c.concursante == concursante.concursante){
                c1.style.color = "#008000";
                showDialog();
            }else{
                c1.style.color = "#FF0000";
            }
            
            c1.appendChild(image);
            c1.appendChild(document.createElement('br')); // Add a line break between image and text
            
            //EDICIÓN
            c2.innerText = c.edicion
            if(c.edicion == concursante.edicion){
                c2.style.color = "#008000";
            }else{
                if(concursante.edicion > c.edicion){
                    c2.style.color = "#FF8000";
                    c2.innerText = c.edicion + " ↑"
                }else{
                    c2.style.color = "#000080";
                    c2.innerText = c.edicion + " ↓"
                }
            }
            
            //POSICIÓN
            c3.innerText = c.posicion
            if(c.posicion == concursante.posicion){
                c3.style.color = "#008000";
            }else{
                if(concursante.posicion < c.posicion){
                    c3.style.color = "#FF8000";
                    c3.innerText = c.posicion + " ↑"
                }else{
                    c3.style.color = "#000080";
                    c3.innerText = c.posicion + " ↓"
                }
            }
            
            //NOMINACIONES
            c4.innerText = c.nominaciones
            if(c.nominaciones == concursante.nominaciones){
                c4.style.color = "#008000";
            }else{
                if(concursante.nominaciones > c.nominaciones){
                    c4.style.color = "#FF8000";
                    c4.innerText = c.nominaciones + " ↑"
                }else{
                    c4.style.color = "#000080";
                    c4.innerText = c.nominaciones + " ↓"
                }
            }
            
            //COMUNIDAD
            c5.innerText = c.comunidad
            if(c.comunidad == concursante.comunidad){
                c5.style.color = "#008000";
            }else{
                c5.style.color = "#FF0000";
            }
              
            // Append cells to row
            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
              
            // Append row to table body
            table.appendChild(row)
            document.getElementById("guess_input").value = ""
        }else{
            alert("Ese concursante no existe")
        }
    }
}

window.onload = () => {    
    mydata = JSON.parse(data)
    console.log(mydata)
    // Select a random contestant
    const randomIndex = Math.floor(Math.random() * mydata.length); 
    concursante = mydata[randomIndex];
    
    console.log(concursante.concursante)
    
    var guess_input = document.getElementById("guess_input");
    guess_input.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            validate();
        }
    });
};

function showDialog() {
  // Display the dialog box
  document.getElementById('dialog').style.display = 'block';
}

function random() {
    location.reload();
}

function removeTildesAndLowerCase(inputText) {
  // Convert the text to lowercase
  let lowercaseText = inputText.toLowerCase();

  // Remove tildes from Spanish characters using regular expressions
  lowercaseText = lowercaseText.replace(/[áäâà]/g, 'a');
  lowercaseText = lowercaseText.replace(/[éëêè]/g, 'e');
  lowercaseText = lowercaseText.replace(/[íïîì]/g, 'i');
  lowercaseText = lowercaseText.replace(/[óöôò]/g, 'o');
  lowercaseText = lowercaseText.replace(/[úüûù]/g, 'u');

  return lowercaseText;
}
