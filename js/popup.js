function pop() { 
  window.open("image/banner/christmascake.jpg", "pop", "width=400,height=500,history=no,resizable=no,status=no,scrollbars=yes,menubar=no")
  }


  function getCheckboxValue()  {
    // 선택된 목록 가져오기
    const query = 'input[name="cake_chk"]:checked';
    const selectedEls = 
        document.querySelectorAll(query);
    
    // 선택된 목록에서 value 찾기
    let result = '';
    selectedEls.forEach((el) => {
      result += el.value + ' ';
    });
    
    // 출력
    $('#selected_menu').attr("value", result);
  }

