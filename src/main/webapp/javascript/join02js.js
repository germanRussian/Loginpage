/**
 * 각 메뉴 함수
 */
 function pwchk(t) {
			if (t.value.length >= 8 && t.value.length <= 120) {
				let regE = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
				if (!regE.test(t.value)) {
					alert("오류2 : 비밀번호는 숫자, 영문자, 특수문자를 포함해야합니다.");
					return false;
				}
			} else {
				alert("오류1 : 비밀번호는 8글자이상 입력하세요.");
			}
			console.log("비밀번호는 8글자이상 입력하세요." + t.value.length);
		}

		function pwshow1() {
			let upw = document.getElementById("upw");

			/* upw2.type = "text"; */

			if (upw.type == "password") {
				upw.type = "text";
				console.log("패스워드 보여집니다.");

			} else {
				upw.type = "password";
				console.log("패스워드 안보여집니다.");

			}

		}

		function pwshow2() {
			let upw2 = document.getElementById("upw2");

			/* upw2.type = "text"; */

			if (upw2.type == "password") {
				upw2.type = "text";
				console.log("패스워드 보여집니다.");

			} else {
				upw2.type = "password";
				console.log("패스워드 안보여집니다.");

			}

		}

		function selRoad() {
			let place = document.getElementById("place");
			place.options[0].selected = true;
			console.log("노선을 변경 했습니다.")
		}

		function join02() {
			let upw = document.getElementById("upw");
			let upw2 = document.getElementById("upw2");
			if (upw.value != upw2.value) {
				alert("비밀번호 서로 다릅니다. 확인해주시기 바랍니다.");
				upw.value = "";//다를시 빈값을 준다.
				upw2.value = "";
				upw.focus();
				return false;
			}

			let busroot = document.getElementById("busroot");
			if (busroot.selectedIndex == 0) {
				alert("노선을 선택해주세요.")
				busroot.focus();
				return false;
			}

			let place = document.getElementById("place");
			if (place.value == "") {
				alert("코스를 선택해주세요.")
				place.focus();
				return false;
			}

			console.log("가입하기 버튼이 눌렸어요.");
			return true;

		}