
const usernameInput = document.getElementById("usernameInput"); 
const userEmailInput = document.getElementById("userEmailInput"); 
const userPasswordInput = document.getElementById("userPasswordInput"); 
const signupBtn = document.getElementById("signupBtn"); 

let usersinfo;
if(localStorage.getItem("users") == null) // if array empty
{
    usersinfo = [];
}
else//if there is information
{
    usersinfo = JSON.parse(localStorage.getItem("users"));//  اجيب البيانات القديمه واحول الstr ل object by parse
}
function signUp()
{

    userInputsValidation();//  اول حرف captial  (شروط كتابة الايميل صح)
    isExist();// if mail mawgood XD

    if(userInputsValidation() == true && isExist() == false)
    {
        let user = 
        {
            name:usernameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }

        usersinfo.push(user) // array of object =json   
        localStorage.setItem("users", JSON.stringify(usersinfo));// array of Object => string
        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");// يبدل الclasses (يظهر كلمت  success)
        const signin = document.getElementById("signin") // بعرف ال id علشان اروح للصفحه اللى بعدها
        signin.classList.replace("d-none", "d-block");
    }
    else // لو دخل البيانات غلط
    {
        const tryAgainMsg = document.getElementById("tryAgainMsg"); //  يظهر مسدج ان البيانات غلط حاول مره كمان
        tryAgainMsg.classList.replace("d-none", "d-block");// يظهر hint
    }

}

function usernameValidation()
{
    const usernameAlert = document.getElementById("usernameAlert");//

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/  // شروط التحقيق من 3 ل10 حروف كبير او صغير + ممكن يكون فى مسافه+ الكلمه التانيه اختيارى من 3 ل10 
    if( regex.test(usernameInput.value) == true && usernameInput.value != "")  //يتاكد ان الاسم مكتوب صح والمكان بتاعه مش فاضى
    {
        usernameInput.classList.add("is-valid");  // is valid in bootstrap make green border to rigth mark 
        usernameInput.classList.remove("is-invalid");  // remove is-invalid
        usernameAlert.classList.replace("d-block", "d-none");//Validation done

        return true
    }
    else// لو ماتحققش
    {
        
        usernameInput.classList.add("is-invalid");//is valid in bootstrap make red border to wrong mark
        usernameInput.classList.remove("is-valid");//
        usernameAlert.classList.replace("d-none", "d-block");//Validation not finish msg 

        return false//
    }
}
function userPasswordValidation()
{
    let regex = /^.{5,15}$/; //اى حرف من 5 ل15 
    const userPasswordAlert = document.getElementById("userPasswordAlert");

    if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
    {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function userEmailValidation()
{
    const userEmailAlert = document.getElementById("userEmailAlert");

    let regex = /@[a-z]{5,10}(\.com)$/; // لازم يكون فى @ ومن5 ل 10 حرف و ينتهى ب .com
    if( regex.test(userEmailInput.value) == true && userEmailInput.value != "")
    {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function isExist()
{
    let accountExistMsg = document.getElementById("accountExistMsg");
    
    for(let i = 0; i < usersinfo.length; i++) // يشوف كل الاسماء 
    {

        if(usersinfo[i].name.toLowerCase() == usernameInput.value.toLowerCase() || usersinfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase())
        {
            accountExistMsg.classList.replace("d-none", "d-block");// يقول ان الاكونت موجود قبل كده
            usernameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            userPasswordInput.classList.remove("is-valid");

            return true
        }
    }
    return false
}
function userInputsValidation() // يتاكد ان ال3 مع بعض شغلين
{
    usernameValidation();   
    userEmailValidation();
    userPasswordValidation();

    if( (usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true))
    {
        return true
    }
    else
    {
        return false
    }
}



var username = localStorage.getItem("sessionUsername");
function login()
{
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginBtn = document.getElementById("loginBtn");
    let wrongMsg = document.getElementById("wrongMsg");

    if(loginEmail.value == "" || loginPassword.value == "")//لو فاضى
    {
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }

    for(var i = 0; i < usersinfo.length; i++)
    {
        if(usersinfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() && usersinfo[i].password.toLowerCase() == loginPassword.value.toLowerCase()) // check user & password
        {
            
            localStorage.setItem('sessionUsername', usersinfo[i].name)//بحضر الاسم اللى هايتعرض فى ال welcome
            loginBtn.setAttribute("href", "shop");// let login but. go to welome.html
        }
        else
        {
            wrongMsg.classList.replace("d-none", "d-block");//بعرض ال wrong msg
        }
    }
}
function displayWelcomeUser()
{
    document.getElementById("username").innerHTML = "Welcome "+ username;

}

function logout() {
    localStorage.removeItem('sessionUsername')
}
