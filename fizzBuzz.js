function fizzBuzz()
{   
    let liste = 0 ;

    for (let i = 1; i <= 201 ; i++)
    {
        
        if( i % 15 === 0)
        {
            liste += '-' + 'fizzbuzz';
        }

        else if( i % 3 === 0)
        {
            liste += 'fizz';
        }
        else if( i % 5 === 0)
        {
            liste += 'buzz';
        }

        else(i<200)
        {
            liste += i;
        }
       
        
    }
    return liste;
}

console.log(fizzBuzz());