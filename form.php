<!DOCTYPE html>
<html>
<head>
    <title>Lab 19 - Form</title>
</head>
<body>

<h2>Registration Form</h2>

<form method="post" action="process.php">
    <label>Name:</label>
    <input type="text" name="name" required>
    <br><br>

    <label>Email:</label>
    <input type="email" name="email" required>
    <br><br>

    <input type="submit" value="Submit">
</form>

</body>
</html>