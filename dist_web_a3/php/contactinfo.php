<!-- The contact info gets passed by contacts.html -->
<?php echo '
<body>
    <table align="center" align="center" bgcolor="lightgrey" style="border: solid black 5px; padding: 20px">
        <tbody>
            <tr>
                <td>
                    <h2>Existing Contacts</h2>
                    <p>First Name: ' . $_POST['fname'] . '</p>
                    <p>Last Name: ' . $_POST['lname'] . '</p>
                    <p>Address: ' . $_POST['address'] . '</p>
                    <p>State: ' . $_POST['state'] . '</p>
                    <p>Zip: ' . $_POST['zip'] . '</p>
                    <p>Telephone: ' . $_POST['phone'] . '</p>
                    <p>Email: ' . $_POST['email'] . '</p>
                    
                    <div align="center">
                        <a href="../home.html">Return to previous page</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</body>
'; ?>