var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","shreyab.jfif", "mummy.jfif" , "papa.jfif"];
var names = ["Family Book","Shreya Kumari (Daughter)", "Neha Kumari (Mother)", "Dr. B Kumar (Father)"];
var information = [ " ", "Daughters are the supportive and loving friend every parent dreams of. Except that daughters are better than friends, because they are a piece of the parents’ innermost being. In old age, the youth of the daughters remind parents of all the joys of life." ,  "A mother contributes her whole life for the betterment of her family. She tries to maintain peace in the family by creating a sense of togetherness & providing unconditional love to the family.She provides live, support, care, affection to all the family members especially to her growing children.A mother provides unparalleled nurturing to her children to make them better human beings. The job of a mother is not an easy one because she is responsible to create an ideal living atmosphere for her children so that they can contribute something for the betterment of the society." , "Fathers are the pillar on which the child’s development is dependent. The family members and the children look forward to him as the head of the family. He lays down a certain set of rules and regulations that the family members have to follow. This ensures harmony and discipline among the members of the family. Children look to their father to learn the way of living in society. Fathers are responsible for teaching basic manners and giving the proper education upon which the children have to build their life."];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
    var updatedInformation = information[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("family_information").innerHTML = updatedInformation;
}
