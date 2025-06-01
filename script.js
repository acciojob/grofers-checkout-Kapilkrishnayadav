const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	console.log("hello")
	const prices=document.querySelectorAll(".price");
    let sum=0;
    for(let i=0;i<prices.length;i++)
{
    sum+=Number(prices[i].innerText);
}
const totalSum=document.querySelector("table");
totalSum.innerHTML+=`<tr>
      <td>${sum}</td>
    </tr>`
  
};

getSumBtn.addEventListener("click", getSum);

