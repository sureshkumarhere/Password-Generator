
let lengthofpassword = 10;

 document.getElementById('simpleRange').addEventListener('input', function () {
        document.getElementsByClassName('data-password-length')[0].textContent = this.value;
        lengthofpassword = this.value;
    });



function get_conditions() {
    let selected_conditions=[];
    for(let i=1;i<=4;i++){
        let id_name= "o"+i;

        
            selected_conditions[i-1]=document.getElementById(id_name).checked;
    }
    return selected_conditions;
}

const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '=', '+', '{', '}', '[', ']', '|', '\\',
    ':', ';', '"', "'", '<', '>', ',', '.', '/', '?'
];

console.log(symbols.length)

document.querySelector('.generate_password').addEventListener('click', function () {
    lengthofpassword = document.getElementsByClassName('data-password-length ')[0].textContent;



    let arr = get_conditions();
    let count = 0;
    for (let i = 0; i < 4; i++){
        
        if (arr[i]) {
            count++;
        }
        
    }
   
    if (count == 0) {
            alert('please select some required fields');
            return;
    }
    if (count >= 2 || lengthofpassword >= 10) {
       document.getElementsByClassName('image_show')[0].src = 'green.jpg'

    }
    else {
        document.getElementsByClassName('image_show')[0].src = 'red.png';
    }
    




    console.log(arr);
    let password = "";
    let lengthgenerated = 0;
   

    
    while (lengthgenerated < lengthofpassword) {
    

        let index = Math.floor(Math.random() * 4);
       
        if (arr[index]) {
            
            lengthgenerated++;
            if (index == 0) {
                password += String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
            else if (index == 1) {
                password += String.fromCharCode(97 + Math.floor(Math.random() * 26));
                
            }
            else if (index == 2) {
                password += symbols[Math.floor(Math.random() * 30)];
            }
            else if (index == 3) {
                password += Math.floor(Math.random() * 10);
            }


        }
    }
    document.getElementsByClassName('password_show')[0].value = password;
    
    
});


document.getElementById('copyButton').addEventListener('click', () => {
    // Get the text from the input field
    const textToCopy = document.getElementsByClassName('password_show')[0].value;
    
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Optional: Provide feedback to the user
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});

