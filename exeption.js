 try{
        throw new error("this is error");
    }
    catch(error){
        console.log("this is error");
    }
    finally{
        console.log("Executed");
    }