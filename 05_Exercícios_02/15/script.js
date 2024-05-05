let num = 123156121;
let divisões = 0;

for (let i = 1; i <= num; i++)

    if  (num % i ==0)
        {divisões++;}   

    if  (divisões == 2)
        {console.log(`O número ${num} é primo`);}

    else
        {console.log(`O número ${num} não é primo`);}
