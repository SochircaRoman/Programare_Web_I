// Task 6
document.writeln("<table border=1>");

let i = 1, j = 1;
do {
    document.writeln('</tr>');
    j = 1;
    do {
        if ((i + j) % 2 == 0) {
            document.writeln('<td bgcolor="white" width="20px" height="20px">');
            document.writeln("     ");
            document.writeln('</td>');
        } else {
            document.writeln('<td bgcolor="black" width="20px" height="20px">');
            document.writeln("     ");
            document.writeln('</td>');
        }
        j++;
    } while (j <= 8);
    document.writeln('</tr>');
    i++;
} while (i <= 8);
document.writeln("</table>");
