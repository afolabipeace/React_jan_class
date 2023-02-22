let baseUrl;
if(process.env.NODE_ENV === 'production'){
    // baseUrl = 'clasduin'
}
else{
    baseUrl = 'http://localhost:4000'
}

export default baseUrl