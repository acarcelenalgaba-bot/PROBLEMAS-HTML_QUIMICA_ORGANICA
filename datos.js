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
                                <td>h)</td><td>Ciclopentano</td><td style="text-left: center;"><svg width="60" height="60" viewBox="0 0 100 100">
                                        <polygon points="50,5 95,38 78,92 22,92 5,38" 
                                                stroke="red" stroke-width="4" fill="none" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td>i)</td><td>Propeno</td><td style="color: red;">\\( \\ce{CH_2=CH-CH_3} \\)</td>
                                <td>j)</td><td>But-2-eno</td><td style="color: red;">\\( \\ce{CH_3-CH=CH-CH_3} \\)
                                </td>
                            </tr>
                            <tr>
                                <td>k)</td><td>Non-1-eno</td><td style="color: red;">\\( \\ce{CH_2=CH-(CH_2)_7-CH_3} \\)</td>
                                <td>l)</td><td>Eteno</td><td style="color: red;">\\( \\ce{CH_2=CH_2} \\)</td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Ciclopenteno</td><td style="text-left: center;"><svg width="60" height="60" viewBox="0 0 100 100">
                                        <polygon points="50,5 95,38 78,92 22,92 5,38" 
                                                stroke="red" stroke-width="4" fill="none" />
                                        <line x1="78" y1="42" x2="65" y2="80" 
                                            stroke="red" stroke-width="4" />
                                    </svg>
                                </td>
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
                                <td>t)</td><td>Ciclohexeno</td><td style="text-left: center;">
                                    <svg width="60" height="60" viewBox="0 0 100 100">
                                        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
                                                stroke="red" stroke-width="4" fill="none" />
                                        <line x1="85" y1="32" x2="85" y2="68" 
                                            stroke="red" stroke-width="4" />
                                    </svg>
                                </td>
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
                                <td>z)</td><td>Ciclobuta-1,3-dieno </td>
                                <td style="text-align: left;color: red;">
                                    <svg width="60" height="60" viewBox="0 0 100 100">
                                        <rect x="15" y="15" width="70" height="70" 
                                            stroke="red" stroke-width="4" fill="none" />
                                        <line x1="25" y1="20" x2="25" y2="80" 
                                            stroke="red" stroke-width="4" />
                                        <line x1="75" y1="20" x2="75" y2="80" 
                                            stroke="red" stroke-width="4" />
                                    </svg>
                                </td>
                                <td></td><td></td><td></td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            `        },
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
                        <td>c)</td><td>\\( \\ce{CH3-CH2-CH2-CH2-CH2-CH2-CH2-CH3} \\)                        
                        </td>
                    
                    </tr>
                    <tr>
                        <td>d)</td>
                        <td style="text-align:left;">
                            <svg width="45" height="45" viewBox="0 0 100 100">
                                <polygon points="20,20 80,20 80,80 20,80" stroke="black" stroke-width="6" fill="none" />
                            </svg>
                        </td>
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
                        <td>k)</td><td>
                            <svg width="45" height="45" viewBox="0 0 100 100">
                                <polygon points="50,5 95,38 78,92 22,92 5,38" stroke="black" stroke-width="6" fill="none" />
                                <line x1="30" y1="82" x2="70" y2="82" stroke="black" stroke-width="6" />
                            </svg>
                        </td>
                        <td>l)</td><td>\\( \\ce{CH3-C#CH} \\)</td>
                    </tr>
                    <tr>
                        <td>m)</td>
                        <td style="text-align:left;">
                            <svg width="55" height="55" viewBox="0 0 100 100">
                                <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" 
                                            stroke="black" stroke-width="6" fill="none" />
                                
                                <line x1="22" y1="35" x2="40" y2="20" stroke="black" stroke-width="6" />
                                
                                <line x1="60" y1="20" x2="78" y2="35" stroke="black" stroke-width="6" />
                                
                                <line x1="35" y1="80" x2="65" y2="80" stroke="black" stroke-width="6" />
                            </svg>
                        </td>
                        <td>n)</td><td>\\( \\ce{CH#C-CH3} \\)</td>
                        <td>ñ)</td><td>\\( \\ce{CH3-CH2-CH2-CH2-CH2-CH3} \\)
                        </td>
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
                            <td>d)</td><td style="text-align:left;">
                                <svg width="45" height="45" viewBox="0 0 100 100">
                                    <polygon points="20,20 80,20 80,80 20,80" stroke="black" stroke-width="6" fill="none" />
                                </svg>
                            </td><td style="color: red;">Ciclobutano</td>
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
                            <td>k)</td><td>
                                <svg width="45" height="45" viewBox="0 0 100 100">
                                    <polygon points="50,5 95,38 78,92 22,92 5,38" stroke="black" stroke-width="6" fill="none" />
                                    <line x1="30" y1="82" x2="70" y2="82" stroke="black" stroke-width="6" />
                                </svg>
                            </td><td style="color: red;">Ciclopenteno</td>
                            <td>l)</td><td>\\( \\ce{CH3-C#CH} \\)</td><td style="color: red;">Propino</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>
                                <svg width="55" height="55" viewBox="0 0 100 100">
                                    <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" 
                                                stroke="black" stroke-width="6" fill="none" />
                                    
                                    <line x1="22" y1="35" x2="40" y2="20" stroke="black" stroke-width="6" />
                                    
                                    <line x1="60" y1="20" x2="78" y2="35" stroke="black" stroke-width="6" />
                                    
                                    <line x1="35" y1="80" x2="65" y2="80" stroke="black" stroke-width="6" />
                                </svg>
                            </td><td style="color: red;">Cicloocta-1,3,6-trieno</td>
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
                        <td>a)</td><td><div data-smiles="CC(C)CC" data-longitud="25" style="margin: 0 auto;"></div></td>
                        <td>b)</td><td><div data-smiles="C=CC(CC)CC=CC" data-longitud="30" style="margin: 0 auto;"></div></td>
                        <td>c)</td><td><div data-smiles="CC(C)C(C)C" data-longitud="25" style="margin: 0 auto;"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-smiles="CC=C(CC)CCC(C)CC" data-longitud="25" style="margin: 0 auto;"></div></td>
                        <td>e)</td><td><div data-smiles="CC(C)CC" data-longitud="25" style="margin: 0 auto;"></div></td>
                        <td>f)</td><td><div data-smiles="C#CC(CC)CC#CCC" data-longitud="25" style="margin: 0 auto;"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-smiles="CC(C)C(C)CC" data-longitud="25" style="margin: 0 auto;"></div></td>
                        <td>h)</td><td><div data-smiles="C=CC(C)CC#C" data-longitud="30" style="margin: 0 auto;"></div></td>
                        <td>i)</td><td><div data-smiles="CC=CC(C)(CC)C=CC=CC" data-longitud="25" style="margin: 0 auto;"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-smiles="CC=C(CC)CCC(C)CC" data-longitud="25" style="margin: 0 auto;"></div></td>
                        <td></td><td></td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
            `,
            solucion: `
                <div class='paso'>
                    
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
                        </td>
                    </tr>

                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                    
                </div>
            `
        },
        {
            titulo: "Problema 6: Nomenclatura de compuestos aromáticos y halogenados",
            enunciado: `Nombra los siguientes compuestos aromáticos y halogenados.
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
                        <td>a)</td><td><div data-smiles="CCc1ccccc1C"></div></td>
                        <td>b)</td><td><div data-smiles="Cc1cc(C)cc(C)c1"></div></td>
                        <td>c)</td><td><div data-smiles="Cc1ccc(C)cc1"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-smiles="Cc1cc(C)ccc1"></div></td>
                        <td>e)</td><td><div data-smiles="CCc1cc(CC)ccc1"></div></td>
                        <td>f)</td><td><div data-smiles="c1ccc2ccccc2c1"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-smiles="CCc1c(CC)c(C)ccc1"></div></td>
                        <td>h)</td><td><div data-smiles="c1ccc2cc3ccccc3cc2c1"></div></td>
                        <td>i)</td><td><div data-smiles="Clc1ccc(Cl)c(Cl)c1"></div></td>
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
                    
                </div>
            `
        }
    ],
    "oxigeno": [
        {
            titulo: "Problema 1: Formulación de compuestos oxigenados",
            enunciado: "Formula los siguientes compuestos oxigenados por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                    
                </div>
            `
        },
        {
            titulo: "Problema 2: Nomenclatura de compuestos oxigenados",
            enunciado: "Nombra los siguientes compuestos oxigenados por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                    
                </div>
            `
        },
        {
            titulo: "Problema 3: Formulación de compuestos oxigenados",
            enunciado: "Formula los siguientes compuestos oxigenados por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                    
                </div>
            `
        },        
        {
            titulo: "Problema 4: Nomenclatura de compuestos oxigenados",
            enunciado: "Nombra los siguientes compuestos oxigenados por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                </div>
                
            `
        },
        {
            titulo: "Problema 5: Formulación de compuestos nitrogenados",
            enunciado: "Formula los siguientes compuestos nitrogenados por las reglas IUPAC",
            solucion: `
                <div class='paso'>
     
                </div>
`
        },
        {
            titulo: "Problema 6: Nomenclatura de compuestos nitrogenados",
            enunciado: "Nombra los siguientes compuestos nitrogenados por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                
                </div>
            `
        }
    ],
    "variados": [
        {
            titulo: "Problema 1: Formulación de compuestos orgánicos",
            enunciado: "Formula los siguientes compuestos orgánicos por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                </div>
            `
        },
        {
            titulo: "Problema 2: Nomenclatura de compuestos orgánicos",
            enunciado: "Nombra los siguientes compuestos orgánicos por las reglas IUPAC",
            solucion: `
                <div class='paso'>

                </div>
            `
        },
        {
            titulo: "Problema 3: Formulación de compuestos orgánicos",
            enunciado: "Formula los siguientes compuestos orgánicos por las reglas IUPAC",
            solucion: `
                <div class='paso'>

                </div>
            `
        },
        {
            titulo: "Problema 4: Nomenclatura de compuestos orgánicos",
            enunciado: "Nombra los siguientes compuestos orgánicos por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                                   
                </div>
            `
        }
    ],
    "refuerzo": [
        {
            titulo: "Problema 1: Formulación de compuestos orgánicos",
            enunciado: "Formula los siguientes compuestos orgánicos por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                   
                </div>`
        },
        {
            titulo: "Problema 2: Nomenclatura de compuestos orgánicos",
            enunciado: "Nombra los siguientes compuestos orgánicos por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                 
                </div>`
        },
        {
            titulo: "Problema 3: Formulación de compuestos orgánicos",
            enunciado: "Formula los siguientes compuestos orgánicos por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                    
                </div>`
        },        
        {
            titulo: "Problema 4: Nomenclatura de compuestos orgánicos",
            enunciado: "Nombra los siguientes compuestos orgánicos por las reglas IUPAC",
            solucion: `
                <div class='paso'>
                </div>    
            `
        }
    ]
};
