<?php echo '
<body>
    <table align="center" bgcolor="lightgrey" border="2">
        <tbody>
            <tr>
                <td>
                    <h2>Thanks For Registering!</h2>
                    <p align="center">Your information:</p>
                    <p>First Name: ' . $_POST['fname'] . '</p>
                    <p>Last Name: ' . $_POST['lname'] . '</p>
                    <p>Address: ' . $_POST['address'] . '</p>
                    <p>State: ' . $_POST['state'] . '</p>
                    <p>Zip: ' . $_POST['zip'] . '</p>
                    <p>Telephone: ' . $_POST['phone'] . '</p>
                    <p>Email: ' . $_POST['email'] . '</p>
                    
                    <div align="center">
                        <a href="../formA3.html">Return to previous page</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</body>
'; ?>
