/*mobile-bottom-action-bar*/


/*public Properties*/

Object.defineProperties(this, {
    $action_btm: {
        value: function (element) {
            var mbs = document.querySelectorAll('mobile[from="bottom-bar"]');
            mbs.forEach(function (e) {
                if (e.getAttribute("setup-properties-public") == null) {
                    Object.defineProperties(e, {

                        onclose: {
                            value: function (caller = function () { }) {
                                var s = this
                                const i = setInterval(function () {
                                    if (s.getAttribute("setup-properties") == "true") {
                                        s.Ponclose(caller);
                                        clearInterval(i)
                                    }
                                });

                            }
                        },

                        close: {
                            value: function (caller = function () { }) {
                                var s = this
                                const i = setInterval(function () {
                                    if (s.getAttribute("setup-properties") == "true") {
                                        s.Pclose(caller);
                                        clearInterval(i)
                                    }
                                });
                            }
                        },

                        show: {
                            value: function () {
                                var s = this
                                if (s.getAttribute("setup-properties") == "true") {
                                    s.Pshow();
                                } else {
                                    const i = setInterval(function () {
                                        if (s.getAttribute("setup-properties") == "true") {
                                            s.Pshow();
                                            clearInterval(i)
                                        }
                                    });
                                }


                            }
                        }

                    });
                    e.setAttribute("setup-properties-public", true)
                }


            });

            return element
        },
        writable: false
    }
});

setInterval(function () {

    /*setup 1*/
    var action_steup1 = document.querySelectorAll('mobile[from="bottom-bar"]');
    action_steup1.forEach(function (e) {
        if (e.getAttribute("setup-setup1") == null) {
            e.setAttribute("setup-setup1", true);
            e.setAttribute("none-scroll", null)
            var Content_agent = e.innerHTML;
            var setup_cnt = `<div mobile-view-none mobile-hidden></div> 
                  <div mobile-view-none last> 
                 <div  mobile-view-cnt none-scroll>
                      ${Content_agent}
                   </div></div> 
                   `
            e.innerHTML = setup_cnt;
            e.setAttribute("ui-setup", true);
        }
    });

    /*Setup 2*/

    var action_steup2 = document.querySelectorAll('mobile[from="bottom-bar"][ui-setup="true"]');
    /*Properties setup Privtes*/
    action_steup2.forEach(function (e) {
        if (e.getAttribute("setup-properties") == null) {
            Object.defineProperties(e, {

                Ponclose: {
                    value: function (caller) {
                        let self = this, ch_s = this.scrollTop
                        let close_bar = this.querySelector("[mobile-view-none][mobile-hidden]");
                        if (caller instanceof Function) {
                            close_bar.onclick = function (event) {
                                caller.call(self, event)
                                self.setAttribute("close-event", "click-hide")
                                event.preventDefault();

                            };

                            self.onscroll = function (event) {
                                if (this.getAttribute('show-event-onshide') == "true") {
                                    var scrollUp = (this.scrollTop / (this.scrollHeight - this.clientHeight)) * 100;
                                    if (scrollUp < 50) {
                                        self.setAttribute("close-event", null)
                                        caller.call(self, event)

                                    }
                                    ch_s = this.scrollTop
                                }


                            }
                        }

                    }
                },

                Pclose: {
                    value: function (caller) {
                        let cnt_el = this.querySelector("[mobile-view-cnt]");
                        var self = this;
                        cnt_el.setAttribute("show-event", self.getAttribute("close-event"));
                        this.removeAttribute("show-event-onshide", null);
                        setTimeout(function () {
                            caller.call(self)
                        }, 290);

                    }
                },

                Pshow: {
                    value: function () {
                        this.style.display = "block"

                        this.scrollTop = this.scrollHeight;
                        var self = this;


                        let cnt_el = this.querySelector("[mobile-view-cnt]");
                        cnt_el.setAttribute("show-event", true);

                        setTimeout(function () {
                            self.setAttribute("show-event-onshide", true);

                        }, 100);

                    }
                }


            });
            e.setAttribute("setup-properties", true);
        }


    });

})   
