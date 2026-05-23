const baseDatosProblemas = {
    "hidrocarburos": [
        {
            titulo: "Problema 1: Formulación de alcanos, alquenos y alquinos",
            enunciado: `Formula los siguientes alcanos, alquenos y alquinos por las reglas IUPAC. <br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>Metano</td>
                            <td>b)</td><td>Etano</td>
                            <td>c)</td><td>Propano</td>
                            <td>d)</td><td>Butano</td>
                        </tr>
                        <tr>
                            <td>e)</td><td>Pentano</td>
                            <td>f)</td><td>Hexano</td>
                            <td>g)</td><td>Decano</td>
                            <td>h)</td><td>Ciclopentano</td>
                        </tr>
                        <tr>
                            <td>i)</td><td>Propeno</td>
                            <td>j)</td><td>But-2-eno</td>
                            <td>k)</td><td>Non-1-eno</td>
                            <td>l)</td><td>Eteno</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>Ciclopenteno</td>
                            <td>n)</td><td>Penta-1,3-dieno</td>
                            <td>ñ)</td><td>Etino</td>
                            <td>o)</td><td>But-1-ino</td>
                        </tr>
                        <tr>
                            <td>p)</td><td>Buta-1,3-diino</td>
                            <td>q)</td><td>Octano</td>
                            <td>r)</td><td>Hexa-1,3,5-triino</td>
                            <td>s)</td><td>Pent-2-ino</td>
                        </tr>
                        <tr>
                            <td>t)</td><td>Ciclohexeno</td>
                            <td>u)</td><td>Hex-3-eno</td>
                            <td>v)</td><td>Hepta-1,4-diino</td>
                            <td>w)</td><td>Pent-1-en-4-ino</td>
                        </tr>
                        <tr>
                            <td>x)</td><td>Hex-4-en-1-ino</td>
                            <td>y)</td><td>Pent-2-eno</td>
                            <td>z)</td><td>Ciclobuta-1,3-dieno</td>
                        </tr>                      
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Metano</td><td style="color: red;">\\( \\ce{CH_4} \\)</td>
                                <td>b)</td><td>Etano</td><td style="color: red;">\\( \\ce{CH_3-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>c)</td><td>Propano</td><td style="color: red;">\\( \\ce{CH_3-CH_2-CH_3} \\)</td>
                                <td>d)</td><td>Butano</td><td style="color: red;">  \\( \\ce{CH_3-CH_2-CH_2-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>Pentano</td><td style="color: red;"> \\( \\ce{CH_3-(CH_2)_3-CH_3} \\)</td>
                                <td>f)</td><td>Hexano</td><td style="color: red;">\\( \\ce{CH_3-(CH_2)_4-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>g)</td><td>Decano</td><td style="color: red;">\\( \\ce{CH_3-(CH_2)_8-CH_3} \\)</td>
                                <td>h)</td><td>Ciclopentano</td><td><div data-smiles="C1CCCC1" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>Propeno</td><td style="color: red;">\\( \\ce{CH_2=CH-CH_3} \\)</td>
                                <td>j)</td><td>But-2-eno</td><td style="color: red;">\\( \\ce{CH_3-CH=CH-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>k)</td><td>Non-1-eno</td><td style="color: red;">\\( \\ce{CH_2=CH-(CH_2)_6-CH_3} \\)</td>
                                <td>l)</td><td>Eteno</td><td style="color: red;">\\( \\ce{CH_2=CH_2} \\)</td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Ciclopenteno</td><td><div data-smiles="C1=CCCC1" data-solucion="true"></div></td>
                                <td>n)</td><td>Penta-1,3-dieno</td><td style="color: red;">\\( \\ce{CH_2=CH-CH=CH-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>ñ)</td><td>Etino</td><td style="color: red;">\\( \\ce{CH \\equiv CH} \\)</td>
                                <td>o)</td><td>But-1-ino</td><td style="color: red;">\\( \\ce{CH \\equiv C-CH_2-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>p)</td><td>Buta-1,3-diino</td><td style="color: red;">\\( \\ce{CH \\equiv C-CH \\equiv CH} \\)</td>
                                <td>q)</td><td>Octano</td><td style="color: red;">\\( \\ce{CH_3-(CH_2)_6-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>r)</td><td>Hexa-1,3,5-triino</td><td style="color: red;">\\( \\ce{CH \\equiv C-CH \\equiv C-CH \\equiv CH} \\)</td>
                                <td>s)</td><td>Pent-2-ino</td><td style="color: red;">\\( \\ce{CH_3-C \\equiv C-CH_2-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>t)</td><td>Ciclohexeno</td><td><div data-smiles="C1=CCCCC1" data-solucion="true"></div></td>
                                <td>u)</td><td>Hex-3-eno</td><td style="color: red;">\\( \\ce{CH_3-CH_2-CH=CH-CH_2-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>v)</td><td>Hepta-1,4-diino</td><td style="color: red;">\\( \\ce{CH \\equiv C-CH_2-C \\equiv CH - CH_2-CH_3} \\)</td>
                                <td>w)</td><td>Pent-1-en-4-ino</td><td style="color: red;">\\( \\ce{CH_2=CH-C \\equiv CH} \\)</td>
                            </tr>
                            <tr>
                                <td>x)</td><td>Hexa-4-en-1-ino</td><td style="color: red;">\\( \\ce{CH_3-CH=CH-CH_2-C \\equiv CH} \\)</td>
                                <td>y)</td><td>Pent-2-eno</td><td style="color: red;">\\( \\ce{CH_3-CH=CH-CH_2-CH_3} \\)</td>
                            </tr>
                            <tr>
                                <td>z)</td><td>Ciclobuta-1,3-dieno </td><td><div data-smiles="C1=CC=C1" data-solucion="true"></div></td>
                                <td></td><td></td><td></td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 2: Nomenclatura de alcanos, alquenos y alquinos",
            enunciado: `Nombra los siguientes alcanos, alquenos y alquinos por las reglas IUPAC. <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td>\\( \\ce{CH3-CH2-CH2-CH3} \\)</td>
                        <td>b)</td><td>\\( \\ce{CH4} \\)</td>
                        <td>c)</td><td>\\( \\ce{CH3-CH2-CH2-CH2-CH2-CH2-CH2-CH3} \\)</td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-smiles="C1CCC1" data-solucion="false"></div></td>
                        <td>e)</td><td>\\( \\ce{CH2=CH2} \\)</td>
                        <td>f)</td><td>\\( \\ce{CH3-CH=CH-CH3} \\)</td>
                    </tr>
                    <tr>
                        <td>g)</td><td>\\( \\ce{CH3-CH2-CH3} \\)</td>
                        <td>h)</td><td>\\( \\ce{CH2=CH-CH=CH-CH3} \\)</td>
                        <td>i)</td><td>\\( \\ce{CH2=CH-CH3} \\)</td>
                    </tr>
                    <tr>
                        <td>j)</td><td>\\( \\ce{CH3-CH3} \\)</td>
                        <td>k)</td><td><div data-smiles="C1=CCCC1" data-solucion="false"></div></td>
                        <td>l)</td><td>\\( \\ce{CH3-C#CH} \\)</td>
                    </tr>
                    <tr>
                        <td>m)</td><td><div data-smiles="C1=CC=CCCC=C1" data-solucion="false"></div></td>
                        <td>n)</td><td>\\( \\ce{CH#C-CH3} \\)</td>
                        <td>ñ)</td><td>\\( \\ce{CH3-CH2-CH2-CH2-CH2-CH3} \\)</td>
                    </tr>
                    <tr>
                        <td>o)</td><td>\\( \\ce{CH2=CH-CH2-CH=CH-CH3} \\)</td>
                        <td>p)</td><td>\\( \\ce{CH3-CH2-CH2-CH2-CH3} \\)</td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
            `,
            solucion: `
                <div class='paso'>
                <table class="tabla-ejercicios-solucion">
                    <thead>
                        <tr>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>\\( \\ce{CH3-CH2-CH2-CH3} \\)</td><td style="color: red;">Butano</td>
                            <td>b)</td><td>\\( \\ce{CH4} \\)</td><td style="color: red;">Metano</td>
                        </tr>
                        <tr>
                            <td>c)</td><td>\\( \\ce{CH3-(CH2)6-CH3} \\)</td><td style="color: red;">Octano</td>
                            <td>d)</td><td><div data-smiles="C1CCC1" data-solucion="false"></div></td><td style="color: red;">Ciclobutano</td>
                        </tr>
                        <tr>
                            <td>e)</td><td>\\( \\ce{CH2=CH2} \\)</td><td style="color: red;">Eteno</td>
                            <td>f)</td><td>\\( \\ce{CH3-CH=CH-CH3} \\)</td><td style="color: red;">But-2-eno</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>\\( \\ce{CH3-CH2-CH3} \\)</td><td style="color: red;">Propano</td>
                            <td>h)</td><td>\\( \\ce{CH2=CH-CH=CH-CH3} \\)</td><td style="color: red;">Penta-1,3-dieno</td>
                        </tr>
                        <tr>
                            <td>i)</td><td>\\( \\ce{CH2=CH-CH3} \\)</td><td style="color: red;">Propeno</td>
                            <td>j)</td><td>\\( \\ce{CH3-CH3} \\)</td><td style="color: red;">Etano</td>
                        </tr>
                        <tr>
                            <td>k)</td><td><div data-smiles="C1=CCCC1" data-solucion="false"></div></td><td style="color: red;">Ciclopenteno</td>
                            <td>l)</td><td>\\( \\ce{CH3-C#CH} \\)</td><td style="color: red;">Propino</td>
                        </tr>
                        <tr>
                            <td>m)</td><td><div data-smiles="C1=CC=CCCC=C1" data-solucion="false"></div></td><td style="color: red;">Cicloocta-1,3,6-trieno</td>
                            <td>n)</td><td>\\( \\ce{CH#C-CH3} \\)</td><td style="color: red;">Propino</td>
                        </tr>
                        <tr>
                            <td>ñ)</td><td>\\( \\ce{CH3-CH2-CH2-CH2-CH2-CH3} \\)</td><td style="color: red;">Hexano</td>
                            <td>o)</td><td>\\( \\ce{CH2=CH-CH2-CH=CH-CH3} \\)</td><td style="color: red;">Hexa-1,4-dieno</td>
                        </tr>
                        <tr>
                            <td>p)</td><td>\\( \\ce{CH3-CH2-CH2-CH2-CH3} \\)</td><td style="color: red;">Pentano</td>
                            <td></td><td></td>
                        </tr>
                    </tbody>
                </table>    
                </div>
            `
        },
        {
            titulo: "Problema 3: Formulación de alcanos, alquenos y alquinos con radicales",
            enunciado: `Formula los siguientes alcanos, alquenos, alquinos con radicales por su fórmula desarrollada. <br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Nombre</th>
                            <th></th><th>Nombre</th>
                            <th></th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>Metilpropano</td>
                            <td>b)</td><td>Metilbutano</td>
                            <td>c)</td><td>3-metilpentano</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>3-metilhex-1-eno</td>
                            <td>e)</td><td>2,3,5-trimetilheptano</td>
                            <td>f)</td><td>4-etil-5-metiloct-1-ino</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>Metilciclopentano</td>
                            <td>h)</td><td>2,2,7,7-tetrametilnonano</td>
                            <td>i)</td><td>2,3-dimetilbutano</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>1,6-dimetilciclohexa-1,3-dieno</td>
                            <td>k)</td><td>5-isopropil-3-metiloctano</td>
                            <td>l)</td><td>4-etil-2,4-dimetilhexano</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>Etilciclobutano</td>
                            <td>n)</td><td>3-etil-2,5-dimetilheptano</td>
                            <td>ñ)</td><td>4,6-dietil-2,4,8-trimetilnonano</td>
                        </tr>
                        <tr>
                            <td>o)</td><td>5,5-dietil-2-metil-4-propildecano</td>
                            <td>p)</td><td>4-ciclopropilheptano</td>
                            <td>q)</td><td>5-terc-butilnonano</td>
                        </tr>
                    </tbody>
                </table>
            `,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Metilpropano</td><td><div data-smiles="CC(C)C" data-solucion="true"></div></td>
                                <td>b)</td><td>Metilbutano</td><td><div data-smiles="CCC(C)C" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>3-metilpentano</td><td><div data-smiles="CCC(C)CC" data-solucion="true"></div></td>
                                <td>d)</td><td>3-metilhex-1-eno</td><td><div data-smiles="C=CC(C)CCC" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>2,3,5-trimetilheptano</td><td><div data-smiles="CCC(C)CC(C)C(C)C" data-solucion="true"></div></td>
                                <td>f)</td><td>4-etil-5-metiloct-1-ino</td><td><div data-smiles="C#CCC(CC)C(C)CCC" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>Metilciclopentano</td><td><div data-smiles="CC1CCCC1" data-solucion="true"></div></td>
                                <td>h)</td><td>2,2,7,7-tetrametilnonano</td><td><div data-smiles="CC(C)(C)CCCCCC(C)(C)C" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>2,3-dimetilbutano</td><td><div data-smiles="CC(C)C(C)C" data-solucion="true"></div></td>
                                <td>j)</td><td>1,6-dimetilciclohexa-1,3-dieno</td><td><div data-smiles="CC1=CC=CCC1C" data-solucion="true"></div></td>
                            </tr>   
                            <tr>
                                <td>k)</td><td>5-isopropil-3-metiloctano</td><td><div data-smiles="CCCC(C(C)C)CC(C)CC" data-solucion="true"></div></td>
                                <td>l)</td><td>4-etil-2,4-dimetilhexano</td><td><div data-smiles="CCC(C)(CC)CC(C)C" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Etilciclobutano</td><td><div data-smiles="CCC1CCC1" data-solucion="true"></div></td>
                                <td>n)</td><td>3-etil-2,5-dimetilheptano</td><td><div data-smiles="CCC(C)CC(CC)C(C)C" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>ñ)</td><td>4,6-dietil-2,4,8-trimetilnonano</td><td><div data-smiles="CC(C)CC(C)(CC)CC(CC)CC(C)C" data-solucion="true"></div></td>
                                <td>o)</td><td>5,5-dietil-2-metil-4-propildecano</td><td><div data-smiles="CCCCCC(CC)(CC)C(CCC)CC(C)C" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>p)</td><td>4-ciclopropilheptano</td><td><div data-smiles="CCCC(CCC)1CC1" data-solucion="true"></div></td>
                                <td>q)</td><td>5-terc-butilnonano</td><td><div data-smiles="CCCCC(CCCC)C(C)(C)C" data-solucion="true"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 4: Nomenclatura de alcanos, alquenos y alquinos con radicales",
            enunciado: `Nombra los siguientes los siguientes alcanos, alquenos y alquinos con radicales por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-smiles="CC(C)CC"></div></td>
                        <td>b)</td><td><div data-smiles="C=CC(CC)CC=CC"></div></td>
                        <td>c)</td><td><div data-smiles="CC(C)C(C)C"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-smiles="CC=C(CC)CCC(C)CC"></div></td>
                        <td>e)</td><td><div data-smiles="CC(C)(C)CC"></div></td>
                        <td>f)</td><td><div data-smiles="C#CC(CC)CC#CCC"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-smiles="CC(C)C(C)CC"></div></td>
                        <td>h)</td><td><div data-smiles="C=CC(C)CC#C"></div></td>
                        <td>i)</td><td><div data-smiles="CC=CC(C)(CC)C=CC=CC"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-smiles="CC=C(CC)CCC(C)CC"></div></td>
                        <td></td><td></td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
            `,
            solucion: `
            <div class='paso'>
                <table class="tabla-ejercicios-solucion">
                    <thead>
                        <tr>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td><div data-smiles="CC(C)CC" data-solucion="false"></div></td><td style="color: red;">Metilbutano</td>
                            <td>b)</td><td><div data-smiles="C=CC(CC)CC=CC" data-solucion="false"></div></td><td style="color: red;">3-etilhepta-1,5-dieno</td>
                        </tr>
                        <tr>
                            <td>c)</td><td><div data-smiles="CC(C)C(C)C" data-solucion="false"></div></td><td style="color: red;">2,3-dimetilbutano</td>
                            <td>d)</td><td><div data-smiles="CC=C(CC)CCC(C)CC" data-solucion="false"></div></td><td style="color: red;">3-etil-6-metiloct-2-eno</td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-smiles="CC(C)(C)CC" data-solucion="false"></div></td><td style="color: red;">2,2-dimetilbutano</td>
                            <td>f)</td><td><div data-smiles="C#CC(CC)CC#CCC" data-solucion="false"></div></td><td style="color: red;">3-etilocta-1,5-diino</td>
                        </tr>
                        <tr>
                            <td>g)</td><td><div data-smiles="CC(C)C(C)CC" data-solucion="false"></div></td><td style="color: red;">2,3-dimetilpentano</td>
                            <td>h)</td><td><div data-smiles="C=CC(C)CC#C" data-solucion="false"></div></td><td style="color: red;">3-metilhex-1-en-5-ino</td>
                        </tr>
                        <tr>
                            <td>i)</td><td><div data-smiles="CC=CC(C)(CC)C=CC=CC" data-solucion="false"></div></td><td style="color: red;">7-etil-7-metildeca-2,4,8-trieno</td>
                            <td>j)</td><td><div data-smiles="CC=C(CC)CCC(C)CC" data-solucion="false"></div></td><td style="color: red;">3-etil-6-metiloct-2-eno</td>
                        </tr>
                    </tbody>
                </table>    
                </div>
            `
        },
        {
            titulo: "Problema 5: Formulación de compuestos aromáticos y halogenados",
            enunciado: `Formula los siguientes compuestos aromáticos y halogenados por las reglas IUPAC. 
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Nombre</th>
                        <th></th><th>Nombre</th>
                        <th></th><th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td>Benceno</td>
                        <td>b)</td><td>Naftaleno</td>
                        <td>c)</td><td>Antraceno</td>
                    </tr>
                    <tr>
                        <td>d)</td><td>2-fenilpentano</td>
                        <td>e)</td><td>o-dimetilbenceno</td>
                        <td>f)</td><td>Hexametilbenceno</td>
                    </tr>
                    <tr>
                        <td>g)</td><td>m-dimetilbenceno</td>
                        <td>h)</td><td>p-etilmetilbenceno</td>
                        <td>i)</td><td>3-fenilhexano</td>
                    </tr>
                    <tr>
                        <td>j)</td><td>p-dipropilbenceno</td>
                        <td>k)</td><td>Metilbenceno</td>
                        <td>l)</td><td>Etenilbenceno</td>
                    </tr>
                    <tr>
                        <td>m)</td><td>2-cloropropano</td>
                        <td>n)</td><td>o-bromoclorobenceno</td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Benceno</td><td><div data-smiles="C1=CC=CC=C1" data-solucion="true"></div></td>
                                <td>b)</td><td>Naftaleno</td><td><div data-smiles="C1=CC=C2C=CC=CC2=C1" data-solucion="true" data-rotation="60"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>Antraceno</td><td><div data-smiles="C1=CC=C2C=C3C=CC=CC3=CC2=C1" data-solucion="true" data-rotation="60"></div></td>
                                <td>d)</td><td>2-fenilpentano</td><td><div data-smiles="CCCC(C)C1=CC=CC=C1" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>o-dimetilbenceno</td><td><div data-smiles="CC1=C(C)C=CC=C1" data-solucion="true"></div></td>
                                <td>f)</td><td>Hexametilbenceno</td><td><div data-smiles="CC1=C(C)C(C)=C(C)C(C)=C1C" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>m-dimetilbenceno</td><td><div data-smiles="CC1=CC(C)=CC=C1" data-solucion="true"></div></td>
                                <td>h)</td><td>p-etilmetilbenceno</td><td><div data-smiles="CCC1=CC=C(C)C=C1" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>3-fenilhexano</td><td><div data-smiles="CCCC(CC)C1=CC=CC=C1" data-solucion="true"></div></td>
                                <td>j)</td><td>p-dipropilbenceno</td><td><div data-smiles="CCCC1=CC=C(CCC)C=C1" data-solucion="true"></div></td>
                            </tr>   
                            <tr>
                                <td>k)</td><td>Metilbenceno</td><td><div data-smiles="CC1=CC=CC=C1" data-solucion="true"></div></td>
                                <td>l)</td><td>Etenilbenceno</td><td><div data-smiles="C=CC1=CC=CC=C1" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>2-cloropropano</td><td><div data-smiles="CC(Cl)C" data-solucion="true"></div></td>
                                <td>n)</td><td>o-bromoclorobenceno</td><td><div data-smiles="ClC1=C(Br)C=CC=C1" data-solucion="true"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 6: Nomenclatura de compuestos aromáticos y halogenados",
            enunciado: `Nombra los siguientes compuestos aromáticos y halogenados. <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-smiles="CCC1=CC=CC=C1C"></div></td>
                        <td>b)</td><td><div data-smiles="CC1=CC(C)=CC(C)=C1"></div></td>
                        <td>c)</td><td><div data-smiles="CC1=CC=C(C)C=C1"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-smiles="CC1=CC(C)=CC=C1"></div></td>
                        <td>e)</td><td><div data-smiles="CCC1=CC(CC)=CC=C1"></div></td>
                        <td>f)</td><td><div data-smiles="C1=CC=C2C=CC=CC2=C1" data-rotation="60"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-smiles="CCC1=C(CC)C(C)=CC=C1"></div></td>
                        <td>h)</td><td><div data-smiles="C1=CC=C2C=C3C=CC=CC3=CC2=C1" data-rotation="60"></div></td>
                        <td>i)</td><td><div data-smiles="ClC1=CC=C(Cl)C(Cl)=C1"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-smiles="C=CC(Cl)(Cl)CCl"></div></td>
                        <td></td><td></td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                <table class="tabla-ejercicios-solucion">
                    <thead>
                        <tr>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>a)</td><td><div data-smiles="CCC1=CC=CC=C1C" data-solucion="false"></div></td><td style="color: red;">1-etil-2-metilbenceno (u o-etilmetilbenceno)</td>
                        <td>b)</td><td><div data-smiles="CC1=CC(C)=CC(C)=C1" data-solucion="false"></div></td><td style="color: red;">1,3,5-trimetilbenceno</td>
                    </tr>
                    <tr>
                        <td>c)</td><td><div data-smiles="CC1=CC=C(C)C=C1"data-solucion="false"></div></td><td style="color: red;">1,4-dimetilbenceno</td>
                        <td>d)</td><td><div data-smiles="CC1=CC(C)=CC=C1"data-solucion="false"></div></td><td style="color: red;">1,3-dimetilbenceno</td>
                    </tr>
                    <tr>
                        <td>e)</td><td><div data-smiles="CCC1=CC(CC)=CC=C1" data-solucion="false"></div></td><td style="color: red;">1,3-dietilbenceno</td>
                        <td>f)</td><td><div data-smiles="C1=CC=C2C=CC=CC2=C1" data-rotation="60"data-solucion="false"></div></td><td style="color: red;">Naftaleno</td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-smiles="CCC1=C(CC)C(C)=CC=C1" data-solucion="false"></div></td><td style="color: red;">1,2-dietil-3-metilbenceno</td>
                        <td>h)</td><td><div data-smiles="C1=CC=C2C=C3C=CC=CC3=CC2=C1" data-rotation="60" data-solucion="false"></div></td><td style="color: red;">Antraceno</td>
                    </tr>
                    <tr>
                        <td>i)</td><td><div data-smiles="ClC1=CC=C(Cl)C(Cl)=C1" data-solucion="false"></div></td><td style="color: red;">1,2,4-triclorobenceno</td>
                        <td>j)</td><td><div data-smiles="C=CC(Cl)(Cl)CCl" data-solucion="false"></div></td><td style="color: red;">3,3,4-triclorobut-1-eno</td>
                    </tr>
                </tbody>
                </table>    
                </div>
            `
        }
    ],
    "oxigeno": [
        {
            titulo: "Problema 1: Formulación de compuestos oxigenados",
            enunciado: `Formula los siguientes compuestos oxigenados por las reglas IUPAC.
            <br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>Butan-2-ol</td>
                            <td>b)</td><td>Etanol</td>
                            <td>c)</td><td>Metanol</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>Pent-3-en-2-ol</td>
                            <td>e)</td><td>4-metilpentan-1,3-diol</td>
                            <td>f)</td><td>Ciclohexano-1,2,3,4,5,6-hexol</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>Fenol</td>
                            <td>h)</td><td>Etil metil éter</td>
                            <td>i)</td><td>Dietil éter</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>Isopropil metil éter</td>
                            <td>k)</td><td>Pentan-3-ona</td>
                            <td>l)</td><td>Acetona (propanona)</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>Butanona</td>
                            <td>n)</td><td>Butanodiona</td>
                            <td>ñ)</td><td>Formaldehído (metanal)</td>
                        </tr>
                        <tr>
                            <td>o)</td><td>Etanal</td>
                            <td>p)</td><td>2,2-dimetilbutanal</td>
                            <td>q)</td><td>Benzaldehído</td>
                        </tr>                     
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Butan-2-ol</td><td><div data-smiles="CCC(O)C" data-solucion="true"></div></td>
                                <td>b)</td><td>Etanol</td><td><div data-smiles="CCO" data-solucion="true" data-rotation="60"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>Metanol</td><td><div data-smiles="CO" data-solucion="true" data-rotation="60"></div></td>
                                <td>d)</td><td>Pent-3-en-2-ol</td><td><div data-smiles="CC(O)C=CC" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>4-metilpentan-1,3-diol</td><td><div data-smiles="CC(C)C(O)CCO" data-solucion="true"></div></td>
                                <td>f)</td><td>Ciclohexano-1,2,3,4,5,6-hexol</td><td><div data-smiles="C1(O)C(O)C(O)C(O)C(O)C1O" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>Fenol</td><td><div data-smiles="C1=CC=C(C=C1)O" data-solucion="true"></div></td>
                                <td>h)</td><td>Etil metil éter</td><td><div data-smiles="CCOC" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>Dietil éter</td><td><div data-smiles="CCOCC" data-solucion="true"></div></td>
                                <td>j)</td><td>Isopropil metil éter</td><td><div data-smiles="CC(C)OC" data-solucion="true"></div></td>
                            </tr>   
                            <tr>
                                <td>k)</td><td>Pentan-3-ona</td><td><div data-smiles="CCC(=O)CC" data-solucion="true"></div></td>
                                <td>l)</td><td>Acetona (propanona)</td><td><div data-smiles="CC(=O)C" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Butanona</td><td><div data-smiles="CCC(=O)C" data-solucion="true"></div></td>
                                <td>n)</td><td>Butanodiona</td><td><div data-smiles="CC(=O)C(=O)C" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>ñ)</td><td>	Formaldehído (metanal)</td><td><div data-smiles="C=O" data-solucion="true"></div></td>
                                <td>o)</td><td>Etanal</td><td><div data-smiles="CC=O" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>p)</td><td>2,2-dimetilbutanal</td><td><div data-smiles="CCC(C)(C)C=O" data-solucion="true"></div></td>
                                <td>q)</td><td>Benzaldehído</td><td><div data-smiles="C1=CC=C(C=C1)C=O" data-solucion="true"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 2: Nomenclatura de compuestos oxigenados",
            enunciado: `Nombra los siguientes compuestos oxigenados por las reglas IUPAC. <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-smiles="OC1=CC=CC=C1"></div></td>
                        <td>b)</td><td> \\(\\ce{CH3-CH2-OH}\\)</td>
                        <td>c)</td><td> <div data-smiles="CC(O)C(O)CC"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td> <div data-smiles="CC(C)(O)C(O)CCC"></div> </td>
                        <td>e)</td><td> \\(\\ce{CH3-O-CH3}\\)</td>
                        <td>f)</td><td><div data-smiles="C1(OC2=CC=CC=C2)=CC=CC=C1"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-smiles="CCOC1=CC=CC=C1"></div></td>
                        <td>h)</td><td>\\(\\ce{CHO-CH2-CHO}\\)</td>
                        <td>i)</td><td><div data-smiles="O=CC1=CC=CC=C1"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td>\\(\\ce{CH3-CH2-CH2-CHO}\\)</td>
                        <td>k)</td><td><div data-smiles="CC(=O)CC(C1=CC=CC=C1)C"></div></td>
                        <td>l)</td><td>\\(\\ce{CH2=C(CH3)-CHO}\\)</td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                </div>
            `
        },
        {
            titulo: "Problema 3: Formulación de compuestos oxigenados",
            enunciado: `Formula los siguientes compuestos oxigenados por las reglas IUPAC
            <br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>Ácido propanoico</td>
                            <td>b)</td><td>Ácido metanoico</td>
                            <td>c)</td><td>Ácido but-2-enoico</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>Ácido propanodioico</td>
                            <td>e)</td><td>Ácido benzoico</td>
                            <td>f)</td><td>Etanoato de sodio</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>Etanoato de calcio</td>
                            <td>h)</td><td>Propanoato de potasio</td>
                            <td>i)</td><td>Butanoato de sodio</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>Butanoato de etilo</td>
                            <td>k)</td><td>Etanoato de etilo</td>
                            <td>l)</td><td>3-bromobutanoato de metilo</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>Butanoato de etilo</td>
                            <td>n)</td><td>Metanoato de metilo</td>
                            <td></td><td></td>
                        </tr>                
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                </div>
            `
        },        
        {
            titulo: "Problema 4: Nomenclatura de compuestos oxigenados",
            enunciado: `Nombra los siguientes compuestos oxigenados por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td>\\(\\ce{CH3-CH2-COOH}\\)</td>
                        <td>b)</td><td>\\(\\ce{CH3-COOH}\\)</td>
                        <td>c)</td><td>\\(\\ce{H-COO-CH2-CH3}\\)</td>
                    </tr>
                    <tr>
                        <td>d)</td><td>\\(\\ce{CH3-CH=CH-CH2-CH(CH3)-COOH}\\)</td>
                        <td>e)</td><td>\\(\\ce{CH3-COO-Na}\\)</td>
                        <td>f)</td><td>\\(\\ce{CH3-CH2-COO-K}\\)</td>
                    </tr>
                    <tr>
                        <td>g)</td><td>\\(\\ce{Ca(CH3-COO)2}\\)</td>
                        <td>h)</td><td>\\(\\ce{CH3-CH(CH3)-CO-O-CH(CH3)-CH3}\\)</td>
                        <td>i)</td><td>\\(\\ce{CH3-CH2-COO-CH3}\\)</td>
                    </tr>
                    <tr>
                        <td>j)</td><td>\\(\\ce{CH3-COO-CH(CH3)-CH3}\\)</td>
                        <td>k)</td><td>\\(\\ce{CH3-CH2-CH2-COO-CH2-CH2-CH3}\\)</td>
                        <td>l)</td><td>\\(\\ce{CH3-COO-CH2-CH2-CH3}\\)</td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                </div>
            `
        },
        {
            titulo: "Problema 5: Formulación de compuestos nitrogenados",
            enunciado: `Formula los siguientes compuestos nitrogenados por las reglas IUPAC.
            <br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>Etanamina</td>
                            <td>b)</td><td>Metanamina</td>
                            <td>c)</td><td>N-metiletanamina</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>N-etil-N-metilpropanamina</td>
                            <td>e)</td><td>Etanamida</td>
                            <td>f)</td><td>Metanamida</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>Butanamida</td>
                            <td>h)</td><td>N-fenilpropanamida</td>
                            <td>i)</td><td>N,N-dietilpropanamida</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>Etanonitrilo</td>
                            <td>k)</td><td>Butanonitrilo</td>
                            <td>l)</td><td>Propanonitrilo</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>1-nitrobutano</td>
                            <td>n)</td><td>Nitroetano</td>
                            <td>ñ</td><td>2-cloro-1-nitropentano</td>
                        </tr>                
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                </div>
            `
        },
        {
            titulo: "Problema 6: Nomenclatura de compuestos nitrogenados",
            enunciado: `Nombra los siguientes compuestos nitrogenados por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td>\\(\\ce{CH3-CH2-CH2-NH-CH3}\\)</td>
                        <td>b)</td><td>\\(\\ce{(CH3)3-N}\\)</td>
                        <td>c)</td><td>\\(\\ce{CH3-CH(CH3)-NH2}\\)</td>
                    </tr>
                    <tr>
                        <td>d)</td><td>\\(\\ce{C6H5-NH2}\\)</td>
                        <td>e)</td><td>\\(\\ce{CH3-(CH2)6-CONH2}\\)</td>
                        <td>f)</td><td>\\(\\ce{H-CONH2}\\)</td>
                    </tr>
                    <tr>
                        <td>g)</td><td>\\(\\ce{CH3-CH2-CONH-CH3}\\)</td>
                        <td>h)</td><td>\\(\\ce{C6H5-CONH2}\\)</td>
                        <td>i)</td><td>\\(\\ce{CH3-C#N}\\)</td>
                    </tr>
                    <tr>
                        <td>j)</td><td>\\(\\ce{CH3-CH2-C#N}\\)</td>
                        <td>k)</td><td>\\(\\ce{N#C-CH2-CH2-CH3}\\)</td>
                        <td>l)</td><td>\\(\\ce{CH3-CH2-NO2}\\)</td>
                    </tr>
                    <tr>
                        <td>m)</td><td>\\(\\ce{NO2-CH2-CH2-NO2}\\)</td>
                        <td>n)</td><td>\\(\\ce{CH3-C(CH3)2-NO2}\\)</td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                </div>
            `
        }
    ],
    "variados": [
        {
            titulo: "Problema 1: Formulación de compuestos orgánicos",
            enunciado: `Formula los siguientes compuestos orgánicos por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Compuesto</th>
                        <th></th><th>Compuesto</th>
                        <th></th><th>Compuesto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td>3-etilhexa-1,5-diino</td>
                        <td>b)</td><td>Butanodinitrilo</td>
                        <td>c)</td><td>But-2-en-1,4-diol</td>
                    </tr>
                    <tr>
                        <td>d)</td><td>Tetraclorometano</td>
                        <td>e)</td><td>Ácido 4-yodopentanoico</td>
                        <td>f)</td><td>2,3,4-trimetilpentanal</td>
                    </tr>
                    <tr>
                        <td>g)</td><td>4,5-dimetilocta-3,6-dien-1-ino</td>
                        <td>h)</td><td>N-metilciclobutilamina</td>
                        <td>i)</td><td>Ciclohexi fenil éter</td>
                    </tr>
                    <tr>
                        <td>j)</td><td>2-metilpropanamida</td>
                        <td>k)</td><td>Naftaleno</td>
                        <td>l)</td><td>1,3-dinitrobenceno</td>
                    </tr>
                    <tr>
                        <td>m)</td><td>Propanoato de metilo</td>
                        <td>n)</td><td>Fenilamina</td>
                        <td></td><td></td>
                    </tr>                
                    </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                </div>
            `
        },
        {
            titulo: "Problema 2: Nomenclatura de compuestos orgánicos",
            enunciado: `Nombra los siguientes compuestos orgánicos por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-smiles="CCC1=CC=CC(CC)=C1"></div></td>
                        <td>b)</td><td><div data-smiles="CCCC(C)C(Cl)(Cl)C"></div></td>
                        <td>c)</td><td><div data-smiles="CCC(O)C(O)C"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-smiles="CC(C)CC(=O)CC(=O)CCC"></div></td>
                        <td>e)</td><td><div data-smiles="CCN(C)C"></div></td>
                        <td>f)</td><td><div data-smiles="C1([NH]C2=CC=CC=C2)=CC=CC=C1"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-smiles="C=CC(=O)C=CC"></div></td>
                        <td>h)</td><td><div data-smiles="CCCC(=O)N"></div></td>
                        <td>i)</td><td>\\(\\ce{CH3-COO-CH2-CH2-CH3}\\)</td>
                    </tr>
                    <tr>
                        <td>j)</td><td>\\(\\ce{CH3-CONH-CH3}\\)</td>
                        <td>k)</td><td><div data-smiles="C#CC(CCC)C#CCC(C)(C)CC"></div></td>
                        <td>l)</td><td>\\(\\ce{NO2-CH2-CH2-NO2}\\)</td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                </div>
            `
        },
        {
            titulo: "Problema 3: Formulación de compuestos orgánicos",
            enunciado: `Formula los siguientes compuestos orgánicos por las reglas IUPAC.
            <br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                            <th></th><th>Compuesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>4-hidroxihexan-3-ona</td>
                            <td>b)</td><td>Ácido 2-hidroxipropanoico</td>
                            <td>c)</td><td>2,3-dihidroxi-1-metilbutanal</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>2-hidroxi-3-oxobutanal</td>
                            <td>e)</td><td>Ácido 4-oxopentanoico</td>
                            <td>f)</td><td>3-aminobutan-2-ol</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>2-etoxietanol</td>
                            <td>h)</td><td>Ácido fenoxietanoico</td>
                            <td>i)</td><td>2-nitroetanol</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>Ácido 2,3-dihidroxibutanoico</td>
                            <td>k)</td><td>Ácido cianoetanoico</td>
                            <td>l)</td><td>3-oxopent-4-enal</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>5-hidroxihexa-1,4-dien-3-ona</td>
                            <td>n)</td><td>3-amino-2-etoxi-4-metilhexanonitrilo</td>
                            <td>ñ</td><td>Ácido 2-hidroxi-2-metilbutanoico</td>
                        </tr>
                        <tr>
                            <td>o)</td><td>3-aminopropanoato de etilo</td>
                            <td>p)</td><td>Ácido 3-ciano-2-metoxibutanoico</td>
                            <td>q)</td><td>3-hidroxiciclohexanona</td>
                        </tr>                  
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                </div>
            `
        },
        {
            titulo: "Problema 4: Nomenclatura de compuestos orgánicos",
            enunciado: `Nombra los siguientes compuestos orgánicos por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-smiles="CC(O)CC(=O)O"></div></td>
                        <td>b)</td><td><div data-smiles="O=CCC(=O)O"></div></td>
                        <td>c)</td><td><div data-smiles="CC(C=O)C=O"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-smiles="C#CC(CC)C(C)C#CC"></div></td>
                        <td>e)</td><td><div data-smiles="CCC(=O)C(=O)O"></div></td>
                        <td>f)</td><td><div data-smiles="CC(O)C=O"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-smiles="CC(=O)CC[NH2]"></div></td>
                        <td>h)</td><td><div data-smiles="CCC(C1CCCC1)C(=O)O"></div></td>
                        <td>i)</td><td><div data-smiles="CC1=CC(C)=C2C=CC=CC2=C1"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-smiles="CC(C1=CC=CC=C1)CC(=O)C"></div></td>
                        <td>k)</td><td><div data-smiles="[NH2]C1C=CCC1(O)"></div></td>
                        <td>l)</td><td>\\(\\ce{CCC=CCC(=O)N}\\)</td>
                    </tr>
                    <tr>
                        <td>m)</td><td><div data-smiles="O=CCC(=O)C=C"></div></td>
                        <td>n)</td><td><div data-smiles="O=C(O)C(O)C(O)C(=O)O"></div></td>
                        <td>ñ)</td><td><div data-smiles="CC(=O)C(CC)CC(=O)O"></div></td>
                    </tr>                    
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                </div>
            `
        }
    ]
};