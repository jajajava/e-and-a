<?php
// Get the form data
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$address = $_POST['address'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Add the user's input to contacts.csv
$data = [$fname, $lname, $address, $state, $zip, $phone, $email];
$file = fopen("../contacts.csv", "a");
fputcsv($file, $data);
fclose($file);

// Thank you page
echo '
<body>
    <table align="center" bgcolor="lightgrey" border="2">
        <tbody>
            <tr>
                <td>
                    <h2>Thanks For Registering!</h2>
                    <p align="center">Your information:</p>
                    <p>First Name: ' . $fname . '</p>
                    <p>Last Name: ' . $lname . '</p>
                    <p>Address: ' . $address . '</p>
                    <p>State: ' . $state . '</p>
                    <p>Zip: ' . $zip . '</p>
                    <p>Telephone: ' . $phone . '</p>
                    <p>Email: ' . $email . '</p>
                    
                    <div align="center">
                        <a href="../home.html">Return to previous page</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</body>
';
?>