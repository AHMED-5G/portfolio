let ts = new Date("1970/01/01 00:00:00");

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 }


//  console.log(toTimestamp('02/13/2009 23:31:30'));

const toSqlDatetime = (inputDate) => {
    const date = new Date(inputDate)
    const dateWithOffest = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    return dateWithOffest
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ')
}
console.log(toSqlDatetime('1970/01/01'))
console.log(toSqlDatetime('2023/02/01'))


// select * from Posts where create_at <  toSqlDatetime('2023/02/01')