function Outer()
{
    var a = 5;
    function() 
    {
        console.log(a);
        var a = 5;
    }
    Inner ();
}
Outer();
