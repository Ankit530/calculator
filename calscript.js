const out = {num1 : 0, num2 : 0, sign : ''};
var number = 0;
var flag = 0;
var dotn = 1;
var prevdot = '';
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
    update();
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
function operation(s)
{
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
