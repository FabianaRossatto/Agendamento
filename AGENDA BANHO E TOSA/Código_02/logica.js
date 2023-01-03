function teste(idAdiciona)
{
    var tabela = document.getElementById(idAdiciona)

    var codigo = (document.getElementById("codigo").value)
    var nomeAnimal = (document.getElementById("nomeAnimal").value)
    var raca = (document.getElementById("raca").value)
    var corPelo = (document.getElementById("corPelo").value)
    var sexo = (document.getElementById("sexo").value)
    var tutor = (document.getElementById("tutor").value)
    const data = new Date(Date.now()).toLocaleDateString()

    if (codigo=="" || nomeAnimal=="" || raca=="" || corPelo==""|| sexo=="" || tutor== "") 
    {
      alert ("Você deve preencher todo o formulário");
    }
    else{
    var numeroLinhas = tabela.rows.lenght

    var linha = tabela.insertRow(numeroLinhas)
   
    var celula1 = linha.insertCell(0)
    var celula2 = linha.insertCell(1)
    var celula3 = linha.insertCell(2)
    var celula4 = linha.insertCell(3)
    var celula5 = linha.insertCell(4)
    var celula6 = linha.insertCell(5)
    var celula7 = linha.insertCell(6)
    
    celula1.innerHTML = "<th scope='row'>" + codigo + "</th>"
    celula2.innerHTML = "<th>" + nomeAnimal + "</th>"
    celula3.innerHTML = "<th>" + raca + "</th>"
    celula4.innerHTML = "<th>" + corPelo + "</th>"
    celula5.innerHTML = "<th>" + sexo + "</th>"
    celula6.innerHTML = "<th>" + tutor + "</th>"
    celula7.innerHTML = "<th>" + data + "<th>"
    
    }
    
  
  }
