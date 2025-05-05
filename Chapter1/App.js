/**
 * <div id ="parent">
 *      <div id= "child">
 *          <h1>"I am inH1 Tag"</h1>
 *       </div>
 * </div>
 * 
 */

const parent = React.createElement("div", {id: "parent"},[
    React.createElement( "div", {id : "child"},[
    React.createElement("h1", {},"Hi I am in H1 tag"),
    React.createElement("h2", {},"Hi I am in H2 tag")
]),
React.createElement( "div", {id : "child2"},[
    React.createElement("h1", {},"Hi I am in H1 tag"),
    React.createElement("h2", {},"Hi I am in H2 tag")

]),
]);

const heading = React.createElement("h1", {
    id: "heading", xyz: "abc"
}, "Hello World from React !!!");

console.log(heading);  //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  //convert the react oject (heading) to h1 tag and render