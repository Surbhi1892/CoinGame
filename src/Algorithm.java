import java.util.*;  

public class FindWinner 
{

    public static void main(String []args){
    
    int NumofCoins = 21;
    
    while(NumofCoins >= 1)
    {
 
        Scanner scanner = new Scanner(System.in);    //System.in is a standard input stream  
        System.out.println("Enter number of Coins (1-4) to choose");  
        int humanInput= sc.nextInt(); 
        if(humanInput > 4 && humanInput<0)
        {
            System.out.println("aiInput:"+ aiInput);
            
        } 
        else
        {
        int aiInput = 5 - humanInput;

        NumofCoins = NumofCoins - humanInput;
        NumofCoins = NumofCoins - aiInput;

        System.out.println("aiInput:"+ aiInput); 
        System.out.println("Coins left:"+ n); 
        }
    }
    
    System.out.print("Finished ");  
   
    }
}