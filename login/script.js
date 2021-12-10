let country = document.querySelector("#country");

let c = [];
let mp = {};
let state_option = [];
const call_api_and_give_countries = async () => {
    const data = await fetch("https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json");
    const data_json = await data.json();
    c = data_json;
    c.map((d) => {
        mp[d["name"]] = d["states"];
        let option = document.createElement("option");
        option.text = d["name"];
        option.value = d["name"];
        country.appendChild(option);
    })
}
call_api_and_give_countries();



let state = document.getElementById("state");
let remove_all_options = () => {
    let remove_ele = document.querySelectorAll(".state-option");
    // console.log(remove_ele.length)
    if(remove_ele.length != 0){
        let i=0;
        let n = remove_ele.length;
        for(i=0;i<n;i++){
            remove_ele[i].remove();
        }
    }
}
let append_new_options = () => {
    state_option = mp[country.value];
    state_option.map((i) => {
        let option = document.createElement("option");
        option.text = i["name"];
        option.value = i["name"];
        option.className = "state-option";
        state.appendChild(option);
    })
}
country.addEventListener("change", () => {
    remove_all_options();
    append_new_options();
})


// let btn = document.getElementById("b");
// btn.addEventListener("click", () => {
//     alert("clicked");
// })