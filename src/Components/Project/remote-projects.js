export default [
        {
            "_id": "5fd08ffb64d32d0011cab222",
            "title": "Hello World",
            "description": "Temperaturen auf dem Display",
            "xml": `<xml xmlns="https://developers.google.com/blockly/xml">
            <block type="arduino_functions" id="QWW|$jB8+*EL;}|#uA" deletable="false" x="27" y="16">
              <statement name="SETUP_FUNC">
                <block type="sensebox_display_beginDisplay" id="L@~CROyhb!Kz/YvSQ(-_"></block>
              </statement>
              <statement name="LOOP_FUNC">
                <block type="sensebox_display_clearDisplay" id="T!:_M528(j1fjTQLUqbC">
                  <next>
                    <block type="sensebox_display_show" id="V-vL5I-C-Lf~gC%79Y%|">
                      <statement name="SHOW">
                        <block type="sensebox_display_printDisplay" id=":7wIM/sVpQ#cRf3u$2n5">
                          <field name="COLOR">WHITE,BLACK</field>
                          <field name="SIZE">1</field>
                          <field name="X">0</field>
                          <field name="Y">0</field>
                          <value name="printDisplay">
                            <block type="text" id="-%?Y!5u?aqA;/5Y1ivu">
                              <field name="TEXT">Temperatur</field>
                            </block>
                          </value>
                          <next>
                            <block type="sensebox_display_printDisplay" id="/RPBbTndr?^MPhroEL#*">
                              <field name="COLOR">WHITE,BLACK</field>
                              <field name="SIZE">1</field>
                              <field name="X">0</field>
                              <field name="Y">12</field>
                              <value name="printDisplay">
                                <block type="sensebox_sensor_temp_hum" id="r_BcTYc[t_VI(KQMzyl_">
                                  <field name="NAME">Temperature</field>
                                </block>
                              </value>
                            </block>
                          </next>
                        </block>
                      </statement>
                    </block>
                  </next>
                </block>
              </statement>
            </block>
          </xml>`,
            "createdAt": "2020-12-09T08:51:07.061Z",
            "updatedAt": "2020-12-09T08:53:12.440Z",
            "__v": 0
            },
            {
            "_id": "5fd090f764d32d0011cab224",
            "title": "If-Else",
            "description": "Überwache den CO2 Gehalt der Umgebungsluft",
            "xml": `<xml xmlns="https://developers.google.com/blockly/xml">
            <block type="arduino_functions" id="QWW|$jB8+*EL;}|#uA" deletable="false" x="27" y="16">
              <statement name="SETUP_FUNC">
                <block type="sensebox_ws2818_led_init" id="m+z5#:T8hRXRBlg_vSff">
                  <field name="Port">1</field>
                  <value name="BRIGHTNESS">
                    <block type="math_number" id="n{3J@y(.[nvD(n#;5|">
                      <field name="NUM">255</field>
                    </block>
                  </value>
                  <value name="NUMBER">
                    <block type="math_number" id="rlUR,#9vYPGFjRnAc9XE">
                      <field name="NUM">1</field>
                    </block>
                  </value>
                </block>
              </statement>
              <statement name="LOOP_FUNC">
                <block type="controls_if" id="VA)51G(qzI5vFs#xO*:A">
                  <mutation xmlns="http://www.w3.org/1999/xhtml" else="1"></mutation>
                  <value name="IF0">
                    <block type="logic_compare" id="m#BrgAkrGRYKxB(8533s">
                      <field name="OP">GT</field>
                      <value name="A">
                        <block type="sensebox_scd30" id="6t!:3bP6{!aa1}F=xDHR">
                          <field name="dropdown">CO2</field>
                        </block>
                      </value>
                      <value name="B">
                        <block type="math_number" id="jeg3o|=dkLAi+bA=gKD]">
                          <field name="NUM">800</field>
                        </block>
                      </value>
                    </block>
                  </value>
                  <statement name="DO0">
                    <block type="sensebox_ws2818_led" id="SkKgueZ^qby.|NgRjv@I">
                      <field name="Port">1</field>
                      <value name="POSITION">
                        <block type="math_number" id="T$eW?~4-F78tWsSj)O~/">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="COLOR">
                        <block type="colour_picker" id="[b%Vkez-~il=ey,Db[=P">
                          <field name="COLOUR">#ff0000</field>
                        </block>
                      </value>
                    </block>
                  </statement>
                  <statement name="ELSE">
                    <block type="sensebox_ws2818_led" id="8WB}+^W8MrBv4PfgOgn">
                      <field name="Port">1</field>
                      <value name="POSITION">
                        <block type="math_number" id="iyTIA^hwd)d9u7(@FcFw">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="COLOR">
                        <block type="colour_picker" id="!U|DNM[qn]$KSI#RQNyH">
                          <field name="COLOUR">#33cc00</field>
                        </block>
                      </value>
                    </block>
                  </statement>
                </block>
              </statement>
            </block>
          </xml>`,
            "creator": "mario.pesch@uni-muenster.de",
            "createdAt": "2020-12-09T08:55:19.298Z",
            "updatedAt": "2020-12-09T08:55:19.298Z",
            "__v": 0
            },
            {
            "_id": "5fd0919e64d32d0011cab226",
            "title": "RGB-LED",
            "description": "Ampelschaltung mit einer Schleife",
            "xml": `<xml xmlns="https://developers.google.com/blockly/xml">
            <variables>
              <variable type="int" id="#vN7O_(Ic%o:)9W%3ivE">i</variable>
            </variables>
            <block type="arduino_functions" id="QWW|$jB8+*EL;}|#uA" deletable="false" x="27" y="16">
              <statement name="SETUP_FUNC">
                <block type="sensebox_ws2818_led_init" id="P2Y5^/kRcjN,8UOo%}B5">
                  <field name="Port">1</field>
                  <value name="BRIGHTNESS">
                    <block type="math_number" id="+tjK5$$D(uaGf9/J=+,X">
                      <field name="NUM">255</field>
                    </block>
                  </value>
                  <value name="NUMBER">
                    <block type="math_number" id="6@OzAwx):#j=y({4mq;/">
                      <field name="NUM">3</field>
                    </block>
                  </value>
                </block>
              </statement>
              <statement name="LOOP_FUNC">
                <block type="controls_for" id="DKp)h6G]jq)e3Wf,qL!b">
                  <field name="VAR" id="#vN7O_(Ic%o:)9W%3ivE" variabletype="int">i</field>
                  <value name="FROM">
                    <block type="math_number" id="$}L.^$udhfQA3Y[1v[B$">
                      <field name="NUM">0</field>
                    </block>
                  </value>
                  <value name="TO">
                    <block type="math_number" id=",+[X~,oMZ1H#tFAn[0/B">
                      <field name="NUM">2</field>
                    </block>
                  </value>
                  <value name="BY">
                    <block type="math_number" id="y^{|.p*|ROJ6.8@OAo+7">
                      <field name="NUM">1</field>
                    </block>
                  </value>
                  <statement name="DO">
                    <block type="sensebox_ws2818_led" id="|5+tgXm$T4?pRrxm.i">
                      <field name="Port">1</field>
                      <value name="POSITION">
                        <block type="variables_get_dynamic" id="y/JUXrw-TM:3E=rHH%T">
                          <field name="VAR" id="#vN7O_(Ic%o:)9W%3ivE" variabletype="int">i</field>
                        </block>
                      </value>
                      <value name="COLOR">
                        <block type="colour_picker" id="z(n,1pr;3-.yW~.[!YkK">
                          <field name="COLOUR">#ff0000</field>
                        </block>
                      </value>
                      <next>
                        <block type="time_delay" id="Hm@FK8oY!M,Bzf++_.[T">
                          <value name="DELAY_TIME_MILI">
                            <block type="math_number" id="eXX]kETgqUKRF5{E6~#s">
                              <field name="NUM">1000</field>
                            </block>
                          </value>
                          <next>
                            <block type="sensebox_ws2818_led" id="o%ado.M61xkUDjbvYH-N">
                              <field name="Port">1</field>
                              <value name="POSITION">
                                <block type="variables_get_dynamic" id="Le^FFiBwYQkM,y16[ZiW">
                                  <field name="VAR" id="#vN7O_(Ic%o:)9W%3ivE" variabletype="int">i</field>
                                </block>
                              </value>
                              <value name="COLOR">
                                <block type="colour_picker" id=".O.n!GDjzU[Jsn_|=zW/">
                                  <field name="COLOUR">#ffff00</field>
                                </block>
                              </value>
                              <next>
                                <block type="time_delay" id="mhX*/4JEuU,*$Fm*!c(6">
                                  <value name="DELAY_TIME_MILI">
                                    <block type="math_number" id="AF@.EkW.?on^w7X9.V">
                                      <field name="NUM">1000</field>
                                    </block>
                                  </value>
                                  <next>
                                    <block type="sensebox_ws2818_led" id="9/oT|bGMQBdfBp3)d]lt">
                                      <field name="Port">1</field>
                                      <value name="POSITION">
                                        <block type="variables_get_dynamic" id="Dc.3)m?sD@Q7VBzQM|">
                                          <field name="VAR" id="#vN7O_(Ic%o:)9W%3ivE" variabletype="int">i</field>
                                        </block>
                                      </value>
                                      <value name="COLOR">
                                        <block type="colour_picker" id="%NtU^P#e5mMN:hQ=4[Wm">
                                          <field name="COLOUR">#33ff33</field>
                                        </block>
                                      </value>
                                      <next>
                                        <block type="time_delay" id=":4mOt#|JF7{C?a3,+}It">
                                          <value name="DELAY_TIME_MILI">
                                            <block type="math_number" id="+3_u@=R~PPa!0~cHyj[">
                                              <field name="NUM">1000</field>
                                            </block>
                                          </value>
                                        </block>
                                      </next>
                                    </block>
                                  </next>
                                </block>
                              </next>
                            </block>
                          </next>
                        </block>
                      </next>
                    </block>
                  </statement>
                </block>
              </statement>
            </block>
          </xml>`,
            "creator": "mario.pesch@uni-muenster.de",
            "createdAt": "2020-12-09T08:58:06.529Z",
            "updatedAt": "2020-12-09T08:58:06.529Z",
            "__v": 0
            }
            
    ]
    
