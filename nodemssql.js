var sql= require("mssql");
var dbconfig = {
server:"localhost\\sqlexpress",
database:"PAS_FLAP_Prospet",
user:"itsdadmin",
password:"itsdadmin",
port:1433

}

function getName()
{

    var conn= new sql.Connection(dbconfig);
    var req= new sql.Request(conn);
    var result="";

    conn.connect(function(err){
        if(err){
            console.log(err);
            return;
        }
        req.query("select top 1 name from test",function (err,recordset)
        {
            if(err){
                    console.log(err);
            }else{
                console.log(recordset);
                result=recordset[0].name;
            }
            conn.close();
        });

    });
return result;
}



exports.getName = function () {
    return getName();;
};