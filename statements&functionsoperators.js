 
    
        function askUser(){
            document.write("Hey who are you😂.....");
        }
        askUser();
        let a="2";
        let b=2;
        console.log(a+b);
        console.log(a-b);
        console.log(a*b);
        console.log(a/b);
        console.log(a%b);
        console.log(a==b);
        console.log(a===b);
        console.log(a>=b);
        console.log(a<=b);
        console.log(typeof(a));
        console.log(a!==b);
        console.log(typeof(b));
        var m=true;
        var n=false;
        var r=true;
        console.log(m&&n);
        console.log(m||n);
        console.log(!m);
        console.log(m&&r);
        console.log(m||r);
        console.log(!r);
        var j=12;
        let p;
        p=j;
        console.log(p);
        p+=j;
        console.log(p);
        p-=j;
        console.log(p);
        p*=j;
        console.log(p);
        p/=j;
        console.log(p);
        var q=9;
        var t=6;
        if(q<t){
        console.log("yes");}
        else if(q=t){
        console.log("no");} 
        else{
            console.log("biii")
        }
        var w=3;
        if(w%2==0){
            console.log("even");
        }
        else{
            console.log("odd");
        }
        var age=9;
        if(age<18){
            console.log("sannonu");
            if(age<10){
                console.log("chik magu");
            }
        }
        else if(age==18){
            console.log("ivag ade");
        }
        else{
            console.log("doddonu😁");
        }
        var value=5;
        switch(value){
            case 1:
                console.log("1");
                break;
            case 2:
                console.log("2");
                break;
            case 3:
                console.log("4");
                break;
            case 4:
                console.log("6");
                break;
            default:
                console.log("the value is incorrect");
        }
        var o=1;
        var d=2;
        var opt=(3);
        switch(opt){
            case 1:
              
                console.log(o+d);
                break;
            case 2:
              
                console.log(o-d);
                break;
            case 3:
              
                console.log(o*d);
                break;
            case 4:
                
                console.log(o/d);
                break;
            default:
                console.log("no");
        }
        //while loop
        let i=0;
        while(i<3){
            console.log(i);
            i++;
        }
        //do while loop
        let zz=0;
        do{
            console.log("fyhgrty:",zz);
            zz++;
        }while(zz<3)
        //for loop
        let vv=5;
        for(gg=0;gg<vv;gg++){
          
             
                if(gg==2){
                    continue;
                 
             }    console.log("hi namju");
        }
        //for of loop
        let aa=["sff","afsf","fef"]; 
        for(let val of aa){
            console.log(val);
        }
        //for in loop
        let jj={n:"manja",age:20};
        for(let key in jj){
            console.log(key,":",jj[key]);
        }

        
     