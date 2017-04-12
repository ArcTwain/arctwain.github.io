---
layout: post
title: Easy SQL Insert
---

*When I taught high school, I loved providing "tips of the day" and/or "questions of the day."  Everybody loves a good sample.*

Today's tip: Easy SQL insert for multiple rows

<pre style="width:350px;background: #1D1F20;color: #fff; padding:20px;font-size:16px;">
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

1. Start with INSERT INTO and the name of your table followed by the names of the fields in order in brackets.<br> 
2. For each row you want to insert, put SELECT followed by the values.<br> 
3. Put string values for a varchar field in single quotes; no quotes are necessary for integer or boolean values.<br>
4. Add a UNION ALL line between each SELECT line but not before the first or after the last.<br>
5. Finally, add GO.<br>

And off we go!
