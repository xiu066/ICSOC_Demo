//double doubleclick function
function doubleclick(id) {
			$(id).dblclick(function () {
				var text = $(this).text();
				$(this).html("");
				$(this).append("<input type='text' value='" + text + "' />");
				$(this).mouseleave(function () {
					$(this).html($("input[type='text']").val());
				});
			});
		}

		var i = 0;
		$(function () {//when document is ready
			$("#left").children().draggable({
				helper: "clone",
				scope: "ss",
			});
			$("#right").droppable({
				scope: "ss",
				drop: function (event, ui) {
					var left = parseInt(ui.offset.left - $(this).offset().left);
					var top = parseInt(ui.offset.top - $(this).offset().top);
					var name = ui.draggable[0].id;
					switch (name) {
						case "sPlace":
							i++;
							var id = "Place" + i;
							$(this).append('<div class="node place sPlace black"  id="' + id + '" >' + $(ui.helper).html() + '_' + i + '</div>');
							$("#" + id).css("left", left).css("top", top);
							jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
							jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
							jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
							jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
							jsPlumb.draggable(id);
							$("#" + id).draggable({ containment: "parent" });
							break;
                        case "ePlace":
                            i++;
                            var id = "Place" + i;
                            $(this).append('<div class="node place ePlace black"  id="' + id + '" >' + $(ui.helper).html() + '_' + i + '</div>');
                            $("#" + id).css("left", left).css("top", top);
                            jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
                            jsPlumb.draggable(id);
                            $("#" + id).draggable({ containment: "parent" });
                            break;
                        case "nPlace":
                            i++;
                            var id = "Place" + i;
                            $(this).append('<div class="node place nPlace normal"  id="' + id + '" >' + $(ui.helper).html() + '_' + i + '</div>');
                            $("#" + id).css("left", left).css("top", top);
                            jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
                            jsPlumb.draggable(id);
                            $("#" + id).draggable({ containment: "parent" });
                            doubleclick("#" + id);
                            break;
						case "nTransition":
							i++;
							id = "Transition" + i;
							$(this).append("<div class='node transition nTransition normal' id='" + id + "'>" + $(ui.helper).html() + "_" + i + "</div>");
							$("#" + id).css("left", left).css("top", top);
							jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
							jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
							jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
							jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
							jsPlumb.addEndpoint(id, hollowCircle);
							jsPlumb.draggable(id);
							$("#" + id).draggable({ containment: "parent" });
							doubleclick("#" + id);
							break;
                        case "sTransition":
                            i++;
                            id = "Transition" + i;
                            $(this).append("<div class='node transition sTransition black' id='" + id + "'>" + $(ui.helper).html() + "_" + i + "</div>");
                            $("#" + id).css("left", left).css("top", top);
                            jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, hollowCircle);
                            jsPlumb.draggable(id);
                            $("#" + id).draggable({ containment: "parent" });
                            break;
                        case "xTransition":
                            i++;
                            id = "Transition" + i;
                            $(this).append("<div class='node transition xTransition black' id='" + id + "'>" + $(ui.helper).html() + "_" + i + "</div>");
                            $("#" + id).css("left", left).css("top", top);
                            jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, hollowCircle);
                            jsPlumb.draggable(id);
                            $("#" + id).draggable({ containment: "parent" });
                            break;
                        case "aTransition":
                            i++;
                            id = "Transition" + i;
                            $(this).append("<div class='node transition aTransition black' id='" + id + "'>" + $(ui.helper).html() + "_" + i + "</div>");
                            $("#" + id).css("left", left).css("top", top);
                            jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, hollowCircle);
                            jsPlumb.draggable(id);
                            $("#" + id).draggable({ containment: "parent" });
                            break;
                        case "iTransition":
                            i++;
                            id = "Transition" + i;
                            $(this).append("<div class='node transition iTransition black' id='" + id + "'>" + $(ui.helper).html() + "_" + i + "</div>");
                            $("#" + id).css("left", left).css("top", top);
                            jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, hollowCircle);
                            jsPlumb.draggable(id);
                            $("#" + id).draggable({ containment: "parent" });
                            break;
                        case "lTransition":
                            i++;
                            id = "Transition" + i;
                            $(this).append("<div class='node transition lTransition black' id='" + id + "'>" + $(ui.helper).html() + "_" + i + "</div>");
                            $("#" + id).css("left", left).css("top", top);
                            jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, hollowCircle);
                            jsPlumb.draggable(id);
                            $("#" + id).draggable({ containment: "parent" });
                            break;
                        case "oTransition":
                            i++;
                            id = "Transition" + i;
                            $(this).append("<div class='node transition oTransition black' id='" + id + "'>" + $(ui.helper).html() + "_" + i + "</div>");
                            $("#" + id).css("left", left).css("top", top);
                            jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                            jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);
                            jsPlumb.addEndpoint(id, hollowCircle);
                            jsPlumb.draggable(id);
                            $("#" + id).draggable({ containment: "parent" });
                            break;
                        }
				}
			});

            //delete node
			$("#right").on("mouseenter", ".node", function () {
				$(this).append('<img class="delete" src="images/close2.png"  style="position: absolute;" />');
				$(".delete").css("left", 22).css("top", -10);
			});
			$("#right").on("click", ".delete", function () {
					jsPlumb.removeAllEndpoints($(this).parent().attr("id"));
					$(this).parent().remove();
			});

            //select test transition
            $("#right").on("mouseenter", ".nTransition", function () {
				$(this).append('<img class="mark" src="images/icon-star.png"  style="position: absolute;" />');
				$(".mark").css("left", 65).css("top", -10);
			});
			$("#right").on("click", ".mark", function () {
                $(this).parent().css("background-color","black").addClass("marked");
			});

            //img remove
            $("#right").on("mouseleave", ".node", function () {
				$("img").remove();
			});

			var _time = null;
			jsPlumb.bind("dblclick", function (conn, originalEvent) {
				clearTimeout(_time);
				var str = conn.getLabel();
				if (str == null) {
					conn.setLabel("<input type='text' value=' ' />");
				} else {
					conn.setLabel("<input type='text' value='" + $(str).text() + "' />");
				}
				$("input[type='text']").mouseleave(function () {
					if ($(this).val().trim() == "") {
						conn.setLabel("");
					} else {
						conn.setLabel("<span style='display:block;padding:10px;opacity: 0.5;height:auto;background-color:white;border:1px solid #346789;text-align:center;font-size:12px;color:black;border-radius:0.5em;'>" + $(this).val() + "</span>");
					}
				});
			});

			//basic arc
			var connectorPaintStyle = {
				lineWidth: 4,
				strokeStyle: "#61B7CF",
				joinstyle: "round",
				outlineColor: "white",
				outlineWidth: 2
			};
			// hover arc
			var connectorHoverStyle = {
				lineWidth: 4,
				strokeStyle: "#216477",
				outlineWidth: 2,
				outlineColor: "white"
			};
			var endpointHoverStyle = {
				fillStyle: "#216477",
				strokeStyle: "#216477"
			};
			//hollow circle
			var hollowCircle = {
				endpoint: ["Dot", { radius: 20 }],
				connectorStyle: connectorPaintStyle,
				connectorHoverStyle: connectorHoverStyle,
				paintStyle: {
					strokeStyle: "#1e8151",
					fillStyle: "transparent",
					radius: 5,
					lineWidth: 1
				},
				//anchor: "AutoDefault",
				isSource: true,	//dragable as start of arc
				connector: ["StateMachine", { stub: [40, 60], gap: 10, cornerRadius: 5, alwaysRespectStubs: true }],  //connectorStyle type [Bezier],[Flowchart],[StateMachine ],[Straight ]
				isTarget: true,	//droppable as end of arc
				maxConnections: -1,
				connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
			};
			//solid circle
			var solidCircle = {
				endpoint: ["Dot", { radius: 20 }],
				paintStyle: { fillStyle: "rgb(122, 176, 44)" },
				connectorStyle: { strokeStyle: "rgb(97, 183, 207)", lineWidth: 4 },
				isSource: true,
				connector: ["StateMachine", { stub: [40, 60], gap: 10, cornerRadius: 5, alwaysRespectStubs: true }], //connectorStyle type [Bezier],[Flowchart],[StateMachine ],[Straight ]
				isTarget: true,
				//anchor: "AutoDefault",
				maxConnections: 3,
				connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
			};


            //call verify() firstly, resuse following variables in other functions
            var sP=[];//sPlace
            var eP=[];//ePlace
            var arcs=[];//connections/arcs
            var nodes=[];//all nodes
            var nor=[];//normal nodes
            var split=[];//split transtions
            var xT=[];//xor-join transtions
            var aT=[];//and-join transtions
            var iT=[];//loop-in transtions
            var lT=[];//loop transtions
            var oT=[];//loop-out transtions
            //verify
            function verify() {
                sP=$("#right .sPlace");//starting place
                eP=$("#right .ePlace");//ending place
                arcs=jsPlumb.getAllConnections();//all connections/arcs
                nodes=$("#right .node");//all nodes
                nor=$("#right .normal");//all normal nodes
                split=$("#right .sTransition");//all split transitions
                xT=$("#right .xTransition");//all xor-join transitions
                aT=$("#right .aTransition");//all and-join transitions
                iT=$("#right .iTransition");//all loop-in transitions
                lT=$("#right .lTransition");//all loop transitions
                oT=$("#right .oTransition");//all loop-out transitions

                if (sP.length != 1 || eP.length != 1) {// 1 start 1 end
                    alert("There must be only 1 pair of Starting and Ending places!!!");
                }
                else if (arcs.some((arc) => {return arc.sourceId[0]===arc.targetId[0];})) {//petri net rule, P -> T -> P
                    alert("Do not connect same type of nodes!!!");
                }
                else if (arcs.some((arc) =>{return $(arc.target).is(".sPlace") || $(arc.source).is(".ePlace");})) {//as alerting
                    alert("No IN-arc for Starting place and No OUT-arc for Ending place!!");
                }
                //sPlace 1-out,ePlace 1-in
                else if (arcs.filter((arc) =>{return $(arc.source).is(".sPlace");}).length!=1 || arcs.filter((arc) =>{return $(arc.target).is(".ePlace");}).length!=1) {
                    alert("Numbers of Starting place's OUT-arc and Ending place's IN-arc must equal to 1!!");
                }
                //"normal" nodes must has 1-in-1-out ////why is index???????????????//why .some is not function but .filter is?????????????
                //jquery selected not array, function(index, element) not function(element, index).
                else if (nor.filter((index) =>{return arcs.filter((arc) =>{return arc.sourceId==nor[index].id;}).length!=1 || arcs.filter((arc) =>{return arc.targetId==nor[index].id;}).length!=1;}).length>0) {
                    alert("Normal Places/Transisitons must have 1 IN-arc and 1 OUT-arc!!");
                }
                //split transition must 1-in-n-out
                else if (split.filter((index) =>{return arcs.filter((arc) =>{return arc.sourceId==split[index].id;}).length<=1 || arcs.filter((arc) =>{return arc.targetId==split[index].id;}).length!=1;}).length>0) {
                    alert("Split Transisitons must have 1 IN-arc and >1 OUT-arcs!!");
                }
                //xor-join transitions must n-in-1-out
                else if (xT.filter((index) =>{return arcs.filter((arc) =>{return arc.sourceId==xT[index].id;}).length!=1 || arcs.filter((arc) =>{return arc.targetId==xT[index].id;}).length<=1;}).length>0) {
                    alert("XOR-join Transisitons must have >1 IN-arcs and 1 OUT-arc!!");
                }
                //and-join transitions must n-in-1-out
                else if (aT.filter((index) =>{return arcs.filter((arc) =>{return arc.sourceId==aT[index].id;}).length!=1 || arcs.filter((arc) =>{return arc.targetId==aT[index].id;}).length<=1;}).length>0) {
                    alert("AND-join Transisitons must have >1 IN-arcs and 1 OUT-arc!!");
                }
                //loop-in transitions must 1-in-2-out
                else if (iT.filter((index) =>{return arcs.filter((arc) =>{return arc.sourceId==iT[index].id;}).length!=2 || arcs.filter((arc) =>{return arc.targetId==iT[index].id;}).length!=1;}).length>0) {
                    alert("LOOP-in Transisitons must have 1 IN-arcs and 2 OUT-arc!!");
                }
                //loop transitions must 1-in-1-out
                else if (lT.filter((index) =>{return arcs.filter((arc) =>{return arc.sourceId==lT[index].id;}).length!=1 || arcs.filter((arc) =>{return arc.targetId==lT[index].id;}).length!=1;}).length>0) {
                    alert("LOOP Transisitons must have 1 IN-arcs and 1 OUT-arc!!");
                }
                //loop-out transitions must 2-in-1-out
                else if (oT.filter((index) =>{return arcs.filter((arc) =>{return arc.sourceId==oT[index].id;}).length!=1 || arcs.filter((arc) =>{return arc.targetId==oT[index].id;}).length!=2;}).length>0) {
                    alert("LOOP-out Transisitons must have 2 IN-arcs and 1 OUT-arc!!");
                }
                else {
                    $("#buttons").html("<button id='next'>Next</button>");
                    $("#next").click(function(event) {return next();});
                    sP.append(`<div class='token' id='token${sP[0].id.slice(5)}' PM='PM(token${sP[0].id.slice(5)})=' value='I'>${sP[0].id.slice(5)}</div>`);
                    $("#instruction").append('<ul id="result"></ul>');
                    $(".token").each((index)=>{$("#result").append(`<li>${$($(".token")[index]).attr("PM")} ${$($(".token")[index]).attr("value")}</li>`)});
                    onFire();
                }
            }

            //onFire function
            function onFire() {
                const T=$("#right .transition");//after call onFire after token added, select T and arcs??????????
                //console.log("run");
                const onFireT=T.filter((index) => {
                    return jsPlumb.getAllConnections().filter((arc1) => {
                        return arc1.targetId===T[index].id;
                        }).filter((arc2) => {
                            return arc2.source.childElementCount===1;//has child div ".token"
                        }).length===jsPlumb.getAllConnections().filter((arc3) => {
                            return arc3.targetId===T[index].id;
                        }).length;
                    });
                //console.log(onFireT.length);
                for (let j=0; j<parseInt(onFireT.length); j++) {
                    $(onFireT[j]).addClass("onFire");
                }
            }

            //Next Marking
            function next() {

                const redT=$("#right .onFire")
                let pmArr=[];
                //1. .onFire's input place(s) remove token "$(xxx).children(".token").remove();""
                redT.each((index) => {
                    jsPlumb.getAllConnections().filter((arc4) => {
                        return arc4.targetId===redT[index].id;}).map((arc5) => {
                            return arc5.source;
                        }).forEach((val) => {
                            pmArr.push({fireT: redT[index].id, stayP: val.id, value: $(val).children(".token").attr("value")});
                            $(val).children(".token").remove();
                            //console.log(pmArr);
                    });
                });

                //2. .onFire output place(s) add token for each，id token+i, html i;
                redT.each((index) => {
                    jsPlumb.getAllConnections().filter((arc4) => {
                        return arc4.sourceId===redT[index].id;
                    }).map((arc5) => {
                        return arc5.target;
                    }).forEach((val) => {

                        //Postmarking method!!!
                        let str='';
                        let arr=pmArr.filter((val) => {return val.fireT===redT[index].id;});
                        //marked normal transition
                        if ($(redT[index]).is(".marked")) {
                            str=`${arr[0].value}>${$(redT[index]).text()}`;
                        }
                        //unmarked normal/split/loop-in/loop
                        else if (($(redT[index]).is(".marked")==false && $(redT[index]).is(".nTransition")) || $(redT[index]).is(".sTransition") || $(redT[index]).is(".iTransition") || $(redT[index]).is(".lTransition")){
                            str=`${arr[0].value}`;
                        }
                        //xor-join
                        else if ($(redT[index]).is(".xTransition")) {
                            let arrV=arr.map((val)=>{return val.value.split('>');});
                            //console.log(arrV);
                            let arrStr=[];
                            let x;
                            for (i=0; i<arrV[0].length; i++) {
                                for (j=0; j<arrV.length-1; j++) {
                                    if (arrV[j][i]!=arrV[j+1][i]) {
                                        break;
                                    }
                                    else if (j===arrV.length-2) {
                                        arrStr.push(arrV[j][i]);
                                        x=i;
                                    }
                                }
                            }
                            let str1=arrStr.join('>');
                            let arrStr2=arrV.map((val)=>{return val.slice(x+1).join('>')}).filter((val)=>{return val!='';});
                            let str2=arrStr2.join('^');
                            if (arrStr2.length<1) {
                                str=str1;
                            } else {
                                str=str1+'>'+'['+str2+']';
                            }
                        }
                        //and-join
                        else if ($(redT[index]).is(".aTransition")) {
                            let arrV=arr.map((val)=>{return val.value.split('>');});
                            //console.log(arrV);
                            let arrStr=[];
                            let x;
                            for (i=0; i<arrV[0].length; i++) {
                                for (j=0; j<arrV.length-1; j++) {
                                    if (arrV[j][i]!=arrV[j+1][i]) {
                                        break;
                                    }
                                    else if (j===arrV.length-2) {
                                        arrStr.push(arrV[j][i]);
                                        x=i;
                                    }
                                }
                            }
                            let str1=arrStr.join('>');
                            let arrStr2=arrV.map((val)=>{return val.slice(x+1).join('>')}).filter((val)=>{return val!='';});
                            let str2=arrStr2.join('^');
                            if (arrStr2.length<1) {
                                str=str1;
                            }
                            else if (arrStr2.length<2) {
                                str=str1+'>'+str2;
                            } else {
                                str=str1+'>'+'('+str2+')';
                            }
                        }
                        //loop-out
                        else if ($(redT[index]).is(".oTransition")) {
                            let arrV=arr.map((val)=>{return val.value.split('>');});
                            //console.log(arrV);
                            let arrStr=[];
                            let x;
                            for (i=0; i<arrV[0].length; i++) {
                                for (j=0; j<arrV.length-1; j++) {
                                    if (arrV[j][i]!=arrV[j+1][i]) {
                                        break;
                                    }
                                    else if (j===arrV.length-2) {
                                        arrStr.push(arrV[j][i]);
                                        x=i;
                                    }
                                }
                            }
                            let str1=arrStr.join('>');
                            let arrStr2=arrV.map((val)=>{return val.slice(x+1).join('>')}).filter((val)=>{return val!='';});
                            let str2=arrStr2.join('^');
                            if (arrStr2.length<1) {
                                str=str1;
                            } else {
                                str=str1+'>'+'{'+str2+'}';
                            }
                        }
                        $(val).append(`<div class="token" id="token${val.id.slice(5)}" PM="PM(token${val.id.slice(5)})=" value="${str}">${val.id.slice(5)}</div>`);
                    });
                });

                //3. remove onFire
                redT.each((index)=>{$(redT[index]).removeClass("onFire");});
                pmArr=[];

                //4. onFire();
                onFire();

                //5. show tokens' Postmarking
                $("#instruction").html('<ul id="result"></ul>');
                $(".token").each((index)=>{$("#result").append(`<li>${$($(".token")[index]).attr("PM")} ${$($(".token")[index]).attr("value")}</li>`)});

            }




        //click to delete arc
          jsPlumb.bind("click", function (conn, originalEvent) {
              if (confirm("Delete this arc?"))
                 jsPlumb.detach(conn);
           });

          //verify button
          $("#verify").click(function(event) {
          return verify();});



		});
