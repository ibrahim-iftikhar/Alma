let bar = document.getElementsByClassName("searchbar")[0]

        let topbar = document.getElementsByClassName("black-div")[0]

        let close = document.getElementsByClassName("exit")[0]

        let menu = document.getElementsByClassName("icon-1")[0]

        let sidebar = document.getElementsByClassName("sidebar")[0]

        let closebar = document.getElementsByClassName("closesidebar")[0]



        bar.addEventListener("click", function () {
            topbar.classList.add("add")
        })

        close.addEventListener("click", function () {
            topbar.classList.remove("add")
        })

        menu.addEventListener("click", function () {
            sidebar.classList.add("add2")
        })

        closebar.addEventListener("click", function () {
            sidebar.classList.remove("add2")
        })




        /////////////////////////////////////////////////////

        let rounds = document.getElementsByClassName("round1")
        console.log(rounds)
        let changediv = document.getElementsByClassName("click-headdiv-2")
        console.log(changediv);

        ////////////////////////////////////////////////////////
        let pictures = document.getElementsByClassName("roundimages")
        console.log(pictures);

        let headings = document.getElementsByClassName("headerdiv-1")
        console.log(headings)




        for (let i = 0; i < pictures.length; i++) {


            rounds[i].addEventListener("mouseenter", function () {

                for (let j = 0; j < rounds.length; j++) {

                    changediv[j].classList.remove("active-0")
                    rounds[j].classList.remove("active-00")
                }

                changediv[i].classList.add("active-0")
                rounds[i].classList.add("active-00")

            })

            // console.log(slides[i]);

            pictures[i].addEventListener("mouseenter", function () {

                // console.log(slides[i])

                for (let j = 0; j < pictures.length; j++) {
                    // console.log(j);
                    pictures[j].classList.remove("active")
                    headings[j].classList.remove("show")
                }


                headings[i].classList.add("show")
                pictures[i].classList.add("active")

            })
        }





        //////////////////////////////////////////////////////
        let enter = document.getElementsByClassName("prnt7-subchild")
        console.log(enter)

        let show01 = document.getElementsByClassName("p7-child1")
        console.log(show01)


        for (let a = 0; a < enter.length; a++) {
            enter[a].addEventListener("click", function () {

                console.log(enter[a])

                for (let k = 0; k < enter.length; k++) {
                    // console.log(k);
                    enter[k].classList.remove("tap")
                    show01[k].classList.remove("take-right")
                }


                show01[a].classList.add("take-right")
                enter[a].classList.add("tap")

            })

        }