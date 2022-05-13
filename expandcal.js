const out = {num1 : 0, num2 : 0, sign : ''};
var number = 0;
var flag = 0;
var dotn = 1;
var prevdot = '';
var flags = 0;
var signf = 0;
function result(prevsign)
{
    if(prevsign == '+')
      return out.num1 + out.num2;
    else if(prevsign == '-')
      return out.num1 - out.num2;
    else if(prevsign == 'x')
      return out.num1 * out.num2;
    else if(prevsign == '/')
      return out.num1 / out.num2;
    else if(prevsign == '%')
      return out.num1 % out.num2;
}
function AC()
{
    out.num1 = 0;
    out.num2 = 0;
    number = 0;
    out.sign = '';
    document.getElementById("ans").innerHTML = "= " + out.num1;
}
function num(val)
{
    number = number*10 + val;
    if(flags == 0)
      update();
    else
      spupdate();
}
function C()
{
    number = (number - number%10)/10;
    update();
}
function update()
{
    if(out.sign == '' && prevdot != '.')
    {
        out.num1 = number;
        document.getElementById("ans").innerHTML = "= " + out.num1;
    }
    else if(prevdot == '.' && flag == 1)
    {
        flag = 0;
        number = 0;
        if(out.sign == '')
          document.getElementById("ans").innerHTML = "= " + out.num1 + prevdot;
        else
          document.getElementById("ans").innerHTML = "= " + out.num1 + " " + out.sign + " " + out.num2 + prevdot;
    }
    else if(prevdot == '.' && flag == 0)
    {
        if(out.sign == '')
        {
            var divide = 1;
            for(let i = 0; i<dotn; ++i)
            {
                divide *= 10;
            }
            number = number/divide;
            out.num1 += number;
            number = 0;
            document.getElementById("ans").innerHTML = "= " + out.num1;
            ++dotn;
        }
        else
        {
            var divide = 1;
            for(let i = 0; i<dotn; ++i)
            {
                divide *= 10;
            }
            number = number/divide;
            out.num2 += number;
            number = 0;
            document.getElementById("ans").innerHTML = "= " + out.num1 + " " + out.sign + " " + out.num2;
            ++dotn;
        }
    }
    else if(out.sign != '' && flag == 1)
    {
        number = 0;
        flag = 0;
        document.getElementById("ans").innerHTML = "= " + out.num1 + " " + out.sign;
    }
    else if(out.sign != '' && flag == 0)
    {
        out.num2 = number;
        document.getElementById("ans").innerHTML = "= " + out.num1 + " " + out.sign + " " + out.num2;
    }
}
function spupdate()
{
    if(flags == 1)
    {
        if(signf == 1 && out.num2 == 0)
        {
            var temp = Math.pow(out.num1, number);
            out.num1 = temp;
            number = 0;
            flags = 0;
            signf = 0;
        }
        else if(signf == 1 && out.num2 != 0)
        {
            var temp = Math.pow(out.num2, number);
            out.num2 = temp;
            number = 0;
            flags = 0;
            signf = 0;
        }
        else if(out.num2 == 0)
        {
          document.getElementById("ans").innerHTML = "= " + out.num1 + " ^ " + number;
        }
        else if(out.num2 != 0)
        {
          document.getElementById("ans").innerHTML = "= " + out.num1 + " " + out.sign + " " + out.num2 + " ^ " + number;
        }
    }
    else if(flags == 2)
    {
        if(signf == 2)
        {
            if(out.num1 == 0)
            {
                out.num1 = Math.log(number);
            }
            else{
                out.num2 = Math.log(number);
            }
            flags = 0;
            signf = 0;
        }
        if(out.num1 == 0)
        {
            document.getElementById("ans").innerHTML = "= lg(" + number + ")";  
        }
        else if(out.num2 == 0){
            document.getElementById("ans").innerHTML = "=" +out.num1 + " " + out.sign + " lg(" + number + ")";
        }
    }
    else if(flags == 3)
    {
        if(signf == 2)
        {
            if(out.num1 == 0)
            {
                out.num1 = Math.sin(number * Math.PI / 180);
            }
            else{
                out.num2 = Math.sin(number * Math.PI / 180);
            }
            flags = 0;
            signf = 0;
        }
        if(out.num1 == 0)
        {
            document.getElementById("ans").innerHTML = "= sin(" + number + ")";  
        }
        else if(out.num2 == 0){
            document.getElementById("ans").innerHTML = "=" +out.num1 + " " + out.sign + " sin(" + number + ")";
        }
    }
    else if(flags == 4)
    {
        if(signf == 2)
        {
            if(out.num1 == 0)
            {
                out.num1 = Math.cos(number * Math.PI / 180);
            }
            else{
                out.num2 = Math.cos(number * Math.PI / 180);
            }
            flags = 0;
            signf = 0;
        }
        if(out.num1 == 0)
        {
            document.getElementById("ans").innerHTML = "= cos(" + number + ")";  
        }
        else if(out.num2 == 0){
            document.getElementById("ans").innerHTML = "=" +out.num1 + " " + out.sign + " cos(" + number + ")";
        }
    }
    else if(flags == 5)
    {
        if(signf == 2)
        {
            if(out.num1 == 0)
            {
                out.num1 = Math.tan(number * Math.PI / 180);
            }
            else{
                out.num2 = Math.tan(number * Math.PI / 180);
            }
            flags = 0;
            signf = 0;
        }
        if(out.num1 == 0)
        {
            document.getElementById("ans").innerHTML = "= tan(" + number + ")";  
        }
        else if(out.num2 == 0){
            document.getElementById("ans").innerHTML = "=" +out.num1 + " " + out.sign + " tan(" + number + ")";
        }
    }
    else if(flags == 6)
    {
        if(signf == 2)
        {
            if(out.num1 == 0)
            {
                out.num1 = Math.sqrt(number);
            }
            else{
                out.num2 = Math.sqrt(number);
            }
            flags = 0;
            signf = 0;
        }
        if(out.num1 == 0)
        {
            document.getElementById("ans").innerHTML = "= sqrt(" + number + ")";  
        }
        else if(out.num2 == 0){
            document.getElementById("ans").innerHTML = "=" +out.num1 + " " + out.sign + " sqrt(" + number + ")";
        }
    }
    else if(flags == 7)
    {
        if(out.sign == '' && out.num1 != 0)
        {
            var temp = out.num1;
            out.num1 = 1;
            while(temp > 1)
            {
                out.num1 = out.num1 * temp;
                --temp;
            }
            flags = 0;
            signf = 0;
            document.getElementById("ans").innerHTML = "= " + out.num1;  
        }
        else if(out.num2 != 0 && out.sign != ''){
            var temp = out.num2;
            out.num2 = 1;
            while(temp > 1)
            {
                out.num2 = out.num2 * temp;
                --temp;
            }
            flags = 0;
            signf = 0;
            document.getElementById("ans").innerHTML = "= " +out.num1 + " " + out.sign + " " + out.num2;
        }
    }
    else if(flags == 8)
    {
        if(signf == 2)
        {
            if(out.num1 == 0)
            {
                out.num1 = 1/number;
            }
            else{
                out.num2 = 1/number;
            }
            flags = 0;
            signf = 0;
        }
        if(out.num1 == 0)
        {
            document.getElementById("ans").innerHTML = "= 1/" + number;  
        }
        else if(out.num2 == 0){
            document.getElementById("ans").innerHTML = "=" +out.num1 + " " + out.sign + " 1/" + number;
        }
    }
}
function operation(s)
{
    if((flags == 2 || flags == 3 || flags == 4 || flags == 5 || flags == 6 || flags == 8) && s != '.')
    {
        signf = 2;
        spupdate();
    }
    else if(flags != 0 && s != '.')
    {
        signf = 1;
        spupdate();
    }
    if(out.num2 != 0 && s != '.')
    {
      out.num1 = result(out.sign);
      out.num2 = 0;
    }
    if(s == '.')
      prevdot = '.';
    else
    {
      out.sign = s;
      prevdot = '';
    }
    flag = 1;
    if(s == '=')
    {
      document.getElementById("ans").innerHTML = "= " + out.num1;
      out.sign = '';
      number = out.num1;
    }
    else
    {
        dotn = 1;
        update();
    }
}
function special(val)
{
    if(val == 1)
    {
        if(out.num1 == 0 || (out.sign != '' && out.num2 == 0))
        {
            alert("please enter the value of X");
        }
        else if(out.num1 != 0 && out.sign == '')
        {
            number = 0;
            flags = 1;
            spupdate();
        }
        else if(out.num1 != 0 && out.sign != '')
        {
            number = 0;
            flags = 1;
            spupdate();
        }
    }
    else if(val == 2)
    {
        if((out.num1 != 0 && out.sign == '') || out.num2 != 0)
        {
            alert("Button should be pressed first ");
        }
        else{
            flags = 2;
            spupdate();
        }
    }
    else if(val == 3)
    {
        if((out.num1 != 0 && out.sign == '') || out.num2 != 0)
        {
            alert("Button should be pressed first ");
        }
        else{
            flags = 3;
            spupdate();
        }
    }
    else if(val == 4)
    {
        if((out.num1 != 0 && out.sign == '') || out.num2 != 0)
        {
            alert("Button should be pressed first ");
        }
        else{
            flags = 4;
            spupdate();
        }
    }
    else if(val == 5)
    {
        if((out.num1 != 0 && out.sign == '') || out.num2 != 0)
        {
            alert("Button should be pressed first ");
        }
        else{
            flags = 5;
            spupdate();
        }
    }
    else if(val == 6)
    {
        if((out.num1 != 0 && out.sign == '') || out.num2 != 0)
        {
            alert("Button should be pressed first ");
        }
        else{
            flags = 6;
            spupdate();
        }
    }
    else if(val == 7)
    {
        if(out.num1 == 0 || (out.sign != '' && out.num2 == 0))
        {
            alert("Enter some value and then click the Button to get the factorial");
        }
        else
        {
            
            flags = 7;
            spupdate();
        }
    }
    else if(val == 8)
    {
        if((out.num1 != 0 && out.sign == '') || out.num2 != 0)
        {
            alert("Button should be pressed first ");
        }
        else{
            flags = 8;
            spupdate();
        }
    }
    else if(val == 9)
    {
        if(out.sign == '')
        {
            out.num1 = 3.141592653589793;
            document.getElementById("ans").innerHTML = "= " + out.num1;
        }
        else
        {
            out.num2 = 3.141592653589793;
            document.getElementById("ans").innerHTML = "= " + out.num1 + " " + out.sign + " " + out.num2;
        }
    }
    else if(val == 0)
    {
        if(out.sign == '')
        {
            out.num1 = 2.718281828459045;
            document.getElementById("ans").innerHTML = "= " + out.num1;
        }
        else
        {
            out.num2 = 2.718281828459045;
            document.getElementById("ans").innerHTML = "= " + out.num1 + " " + out.sign + " " + out.num2;
        }
    }
}


function Theme()
{
    var theme = document.getElementsByTagName('link')[0];
    if(theme.getAttribute('href') == 'calcss.css')
    {
      theme.setAttribute('href' , 'calcssdark.css');
      document.getElementById("switch").innerHTML = "Light Theme";
    }
    else
    {
      theme.setAttribute('href' , 'calcss.css');
      document.getElementById("switch").innerHTML = "Dark Theme";
    }
}