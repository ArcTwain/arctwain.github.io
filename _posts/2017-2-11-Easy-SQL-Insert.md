---
layout: post
title: Easy SQL Insert
---

Tip of the Day: Easy SQL insert for multiple rows

<pre style="background: #555; color: #fff">
INSERT INTO Beatles (FirstName, LastName)
SELECT ‘Ada’, ‘Lovelace’
UNION ALL
SELECT ‘Grace’, ‘Hopper’<br>
UNION ALL
SELECT ‘Alan’, ‘Turing’<br>
UNION ALL
SELECT ‘Tim’, ‘Berners-Lee’<br>
GO
</pre>

>1. Start with INSERT INTO and the name of your table followed by the names of the fields in order in brackets.<br> 
>2. For each row you want to insert, put SELECT followed by the values.<br> 
>3. Put string values for a varchar field in single quotes; no quotes are necessary for integer or boolean values.<br>
>4. Add a UNION ALL line between each SELECT line but not before the first or after the last.<br>
>5. Finally, add GO.<br>

And off we go!
